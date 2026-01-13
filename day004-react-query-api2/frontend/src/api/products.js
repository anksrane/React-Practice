// api/products.js
import axios from "axios";

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