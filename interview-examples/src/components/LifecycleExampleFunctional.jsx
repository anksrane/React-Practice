import React, { useEffect, useState } from 'react'

function LifecycleExampleFunctional() {
    const [count,setCount]=useState(0);

    // ⏱️ Mounting (runs once)
    useEffect(()=>{
        console.log("Component Mounted");
        
        return()=>{
            console.log("Component will unmount");
        };
    },[]);

    // 🔁 Updating (runs on `count` change)
    useEffect(()=>{
        console.log("Count Updated:",count);
    },[count])
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LifecycleExampleFunctional
