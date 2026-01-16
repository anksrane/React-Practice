// App.jsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"; //this will replace useEffect
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "./api/products";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const {
    data: products = [], // API response data
    isLoading, // loading state
    isError, // error state
  } = useQuery({
    queryKey: ["products", search], // unique cache key
    queryFn: () => fetchProducts(search), // function that fetches data
    // ❌ CHANGE THIS LINE (v5 doesn't use keepPreviousData)
    // keepPreviousData: true,     
    placeholderData: (previousData) => previousData,
  });

  // Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // React Query cache access
  const queryClient = useQueryClient();

  // add Products Mutation
  const addProductMutation = useMutation({
    mutationFn: addProduct,

    onSuccess: () => {
      // ❌ Your old line (not fully correct with search)
      // queryClient.invalidateQueries(["products"]);

      // ✅ NEW CORRECT LINE
      queryClient.invalidateQueries({ queryKey: ["products"] });      
      reset();
    },
  });

  // update Products Mutation
  const updateProductMutation = useMutation({
    mutationFn: updateProduct,

    onSuccess: () => {
      // Refresh product list after update
      queryClient.invalidateQueries({ queryKey: ["products"] });
    }
  })

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      // Refresh product list after delete
      queryClient.invalidateQueries({ queryKey: ["products"] })
    }
  })

  // Form submit handler
  const onSubmit = (data) => {
    // data = { name: "...", price: "..." }
    console.log(data);
    addProductMutation.mutate({
      name: data.name,
      price: Number(data.price),
    });
  };

  // Handle Update
  const handleUpdate = (product) => {
    const newName = prompt("Enter new product name:", product.name);
    const newPrice = prompt("Enter new price:", product.price);

    if (!newName || !newPrice) return;
    // console.log("Update Products: ",product);

    updateProductMutation.mutate({
      id: product.id,
      data: {
        name: newName,
        price: Number(newPrice),
      },
    });
  };  

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteProductMutation.mutate(id);
    }
  };

  return (
    <>
      <h1>Test API</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <input
          placeholder="Product name"
          {...register("name", {
            required: "Product name is required",
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        {/* Product Price */}
        <input
          placeholder="Price"
          type="number"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be greater than 0" },
          })}
        />
        {errors.price && <p>{errors.price.message}</p>}

        <button type="submit">Add Product</button>

        {/* Mutation states */}
        {addProductMutation.isLoading && <p>Adding product...</p>}
        {addProductMutation.isError && <p>Error adding product</p>}
      </form>

      <hr />

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Number of Products are: {products.length}</h2>

      {
        isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Error While Loading Data</h1>
        ) : (
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {products.map((product) => (
              <li key={product.id} style={{ marginBottom: "8px" }}>
                {product.name} - ₹{product.price}

                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleUpdate(product)}
                >
                  Edit
                </button>

                <button
                  style={{ marginLeft: "5px" }}
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
}

export default App;
