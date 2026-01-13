// Backup Before Coding with React Query

import { useState } from 'react'
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading ] = useState(false);

  useEffect(()=>{
    // If we want to call api without fetch we cannot write async await directly inside useEffect\
    // We Required "Immediate Invoke Function" 
    ;(
      async()=>{
        try {
          setLoading(true);
          setError(false)
          const response = await axios.get('/api/products');
          console.log(response);
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }
    )()
  },[])

  if(loading) return(<h1>Loading...</h1>);

  if(error) return(<h1>Error While Loading Data</h1>);

  if(!error && !loading) 
  return (
    <>
      <h1>Test API</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
