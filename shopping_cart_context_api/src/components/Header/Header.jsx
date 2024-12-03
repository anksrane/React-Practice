import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css';
import Cart from '../Cart/Cart'
import '../Cart/Cart.css';
import { useCart } from '../../contexts/CartContext';

function Header() {
  const [isCartActive,setIsCartActive]=useState(false);
  const [counter,setCounter]=useState(0);
  const { cart, removeFromCart, clearCart, updateQuantityInCart } = useCart();

  const toggleCart=()=>{
    setIsCartActive(!isCartActive);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 m-0">
    <div className="container">
      <Link className="px-2 py-3 navbar-brand" to="/">#ShopWithUs</Link>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="p-0 nav-item">
            <NavLink className="px-2 py-3 nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="p-0 nav-item">
            <NavLink className="px-2 py-3 nav-link" to="#">Link</NavLink>
          </li>
        </ul>
        <button className="btn btn-cart" onClick={toggleCart}><i className="fa-solid fa-cart-shopping"></i><span className="counter">{cart.length}</span></button>
      </div> */}
      <button className="btn btn-cart" onClick={toggleCart}><i className="fa-solid fa-cart-shopping"></i><span className="counter">{cart.length}</span></button>
    </div>
    <Cart isActive={isCartActive} toggleCart={toggleCart} ></Cart>
  </nav>
  )
}

export default Header
