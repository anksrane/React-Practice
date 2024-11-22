import React from "react";
import "./Products.css";
// Products.jsx
import useFetchProducts from '../../hooks/useFetchProducts';
import { useCart } from "../../contexts/CartContext"; 

function Products() {
    const { data: products, loading, error } = useFetchProducts("https://fakestoreapi.com/products");
    const { cart, addToCart } = useCart();

    const handleAddToCart = (product) => {
      addToCart(product);
    };
  
    const isInCart = (productId) => {
      return cart.some((item) => item.id === productId);
    };
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div className="container">
        <h1 className="text-left my-3">Products List</h1>
        <div className="products-list-container">
          {products.map((product) => (
            <div className="product-outer-container" key={product.id}>
              <div className="product-img-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid prod-img"
                />
              </div>
              <div className="product-info">
                <h5 className="prod-category">{product.category}</h5>
                <h3 className="prod-title">{product.title}</h3>
                <h2 className="prod-price">$ {product.price}</h2>
              </div>
              <button className="btn add-to-cart-btn" onClick={() => handleAddToCart(product)}
              disabled={isInCart(product.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Products;
