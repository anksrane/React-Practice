import {useEffect, useState} from "react";
function useFetchProducts(url) {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]= useState(null);
    useEffect(()=>{
        setLoading(true);
        const fetchData=async ()=>{
            try{
                const response=await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const result=await response.json();
                setData(result);
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[url]);

    return {data,loading,error};
}
export default useFetchProducts; 