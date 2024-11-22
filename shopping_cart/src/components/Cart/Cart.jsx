import React from "react";
import "./Cart.css";
import { useCart } from '../../contexts/CartContext';

function Cart({ isActive, toggleCart }) {
  const { cart, removeFromCart, clearCart, updateQuantityInCart } = useCart();

  // Handle quantity change
  const handleQuantityChange = (e, productId) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity <= 0) return; // Prevent invalid quantity (e.g., 0 or negative)

    // Update the quantity of the product in the cart
    updateQuantityInCart(productId, newQuantity);
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cart
      .reduce(
        (total, product) => total + product.price * (product.quantity || 1),
        0
      )
      .toFixed(2);
  };

  return (
    <div className={`cart-products-container ${isActive ? "active" : ""}`}>
      <i className="fa-solid fa-xmark close-cart" onClick={toggleCart}></i>
      <h2 className="text-center shopping-cart mb-3">Your Cart</h2>
      <div className="cart-content">
        {cart.length === 0 ? (
          <h5 className="text-center">No items added to cart</h5>
        ) : (
          cart.map((product) => (
            <div className="cart-box" key={product.id}>
              <img src={product.image} alt="" className="cart-img"></img>
              <div className="cart-item-info">
                <h5>{product.title}</h5>
                <p>$ {product.price}</p>
                <input
                  type="number"
                  value={product.quantity || 1}
                  className="cart-quantity"
                  onChange={(e) => handleQuantityChange(e, product.id)}
                ></input>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <>
          <div className="d-flex justify-content-end total">
            <div className="fw-bold total-title">Total</div>
            <div className="total-price">$ {calculateTotal()}</div>
          </div>
          <button type="button" className="btn btn-buy" onClick={clearCart}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
