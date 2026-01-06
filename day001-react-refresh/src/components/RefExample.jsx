import React, { useEffect, useRef, useState } from 'react'

const RefExample = () => {
    // const inputRef = useRef(null);
    // useEffect(()=>{
    //     inputRef.current.focus();
    //     console.log(inputRef);
    // },[])
    const [time, setTime] = useState(0);
    const timeRef = useRef(null);

    const start = () =>{
        if(timeRef.current !==null) return;

        timeRef.current=setInterval(()=>{
            setTime((prev)=> prev+1);
        },1000)
    }

    const stop = () =>{
        clearInterval(timeRef.current);
        timeRef.current= null;
    }

    const reset = () =>{
        stop();
        setTime(0);
    }

    useEffect(()=>{
        return()=>{
            clearInterval(timeRef.current);
        }
    },[])


    return (
        <div>
        <h1>useRef Example</h1>
        {/* <input ref={inputRef} /> */}
        <h2>Time: {time}</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}

export default RefExample
