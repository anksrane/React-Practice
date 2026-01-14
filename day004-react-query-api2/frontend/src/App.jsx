// App.jsx
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"; //this will replace useEffect
import { fetchProducts, addProduct } from "./api/products";
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
    keepPreviousData: true, // To PRevent Previous Data
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

  const addProductMutation = useMutation({
    mutationFn: addProduct,

    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      reset();
    },
  });

  // Form submit handler
  const onSubmit = (data) => {
    // data = { name: "...", price: "..." }
    console.log(data);
    addProductMutation.mutate({
      name: data.name,
      price: Number(data.price),
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error While Loading Data</h1>;
  }

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

      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
