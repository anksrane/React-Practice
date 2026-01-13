// App.jsx
import { useQuery } from '@tanstack/react-query'; //this will replace useEffect
import { fetchProducts } from './api/products';
import './App.css';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");

  const {
    data: products,   // API response data
    isLoading,        // loading state
    isError           // error state
  } = useQuery({
    queryKey: ['products', search],   // unique cache key
    queryFn: ()=> fetchProducts(search)    // function that fetches data
  })

  if(isLoading){
    return(
      <h1>Loading...</h1>
    )
  }

  if(isError){
    return(
      <h1>Error While Loading Data</h1>
    )
  }

  return (
    <>
      <h1>Test API</h1>
      <input type="text" 
        placeholder='Search ...' 
        value={search} 
        onChange={(e)=> setSearch(e.target.value)}/>
        <h2>Number of Products are: {products.length}</h2>
        <ul style={{listStyleType: "none", paddingLeft: "0"}}>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ₹{product.price}
            </li>
          ))}
        </ul>      
    </>
  )
}

export default App
