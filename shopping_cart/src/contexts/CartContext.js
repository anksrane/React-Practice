import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Cart Context
export const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });


  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);  
  // Add product to cart or update quantity if it already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        // If product exists, update the quantity
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // Otherwise, add the product with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update the quantity of an existing item
  const updateQuantityInCart = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateQuantityInCart }}>
      {children}
    </CartContext.Provider>
  );
};
