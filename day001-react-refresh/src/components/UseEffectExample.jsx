import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [query, setQuery] = useState("");
    const [inputStatus, setInputStatus]= useState("");

    useEffect(()=>{
        // Example 1
        // console.log("Component Mount");
        // return()=>{
        //     console.log("Component UnMount");
        // }

        // Example 2
        // const id = setInterval(() => console.log("tick"), 1000);
        // return () => clearInterval(id);   
        
        // Example of input
        if(!query){
            setInputStatus("");
            return;
        }

        setInputStatus("Typing...");

        const timer = setTimeout(()=>{
            setInputStatus("Saved");
        },1000);

        return()=> clearTimeout(timer);
    },[query]);
    return (
        <div>
            <h1>useEffect Example</h1>
            <label htmlFor="searchInput">Search : </label> 
            <input type="text" id="searchInput" placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <p>{inputStatus}</p>
        </div>
    )
}

export default UseEffectExample
