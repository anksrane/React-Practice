import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { CartProvider } from './contexts/CartContext';
import Layout from './Layout';
import Products from './components/Products/Products';

// Dynamically add the Font Awesome CDN link to the head of the document
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Products />} />
      <Route path='buynow' element={<Products />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Wrap RouterProvider with CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);