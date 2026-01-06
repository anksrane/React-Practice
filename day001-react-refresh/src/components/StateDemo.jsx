import React, { useState } from 'react'

const StateDemo = () => {
    const [count, setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }

    function decrement(){
        if(count!=0){
            setCount(count-1);
        }else{
            alert("Can't go below 0");
        }
    }

    function resetCount(){
        setCount(0);
    }

    return (
        <div>
            <h1>useState Example</h1>
            <h1>Count is {count}</h1>
            <div className='flex'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    )
}

export default StateDemo
