// api/products.js
import axios from "axios";

// Get Products
export const fetchProducts = async(search)=>{
    //without search parameter
    // const response = await axios.get("/api/products")
    
    // with search parameter
    const response = await axios.get("/api/products",{
        params:{
            search: search || '' ,      // if empty, backend returns all products
        }
    })   
    return response.data;
}

// Add Products
export const addProduct = async (data) => {
    const response = await axios.post("/api/products", data);
    return response.data;
}