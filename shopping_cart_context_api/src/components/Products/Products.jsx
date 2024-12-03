import React, { useEffect, useState } from "react";
import "./Products.css";
// Products.jsx
import useFetchProducts from '../../hooks/useFetchProducts';
import { useCart } from "../../contexts/CartContext"; 
import loadingGif from "../../images/loading.gif"

function Products() {
    const { data: products, loading, error } = useFetchProducts("https://fakestoreapi.com/products");
    const { cart, addToCart } = useCart();
    const [visibleCount, setVisibleCount] = useState(8); // Start with 8 products visible
    const handleAddToCart = (product) => {
      if (cart.length>=5){
        alert("You can't add more than 5 products to your cart");
      }else{
        addToCart(product);
      }
    };
  
    const isInCart = (productId) => {
      return cart.some((item) => item.id === productId);
    };

    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (bottom) {
          setVisibleCount((prevCount) => prevCount + 4); // Load 4 more products
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    if (loading) {
      return (
        <div className="d-flex h-100 w-100 align-items-center justify-content-center">
          <img src={loadingGif} alt="" className="img-fluid" style={{ width: '50px', height: '50px' }} />
          {/* <p>Test...</p> */}
        </div>
      );
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div className="container">
        <h1 className="text-center my-3">Products List</h1>
        <div className="products-list-container mb-3 mx-auto">
          {products.slice(0, visibleCount).map((product) => (
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
                <h4 className="prod-title">{product.title}</h4>
                <h3 className="prod-price">$ {product.price}</h3>
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
