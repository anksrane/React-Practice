import './App.css';
import { useState,useCallback } from "react";

function App(){
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+-={}[]|\:;<>,.?/";
    for (let i = 1; i <= length; i++) {
      let char=Math.round(Math.random()*str.length+1);
      pass+=str.charAt(char);      
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
    <div className="w-100 vh-100 d-flex flex-column justify-content-center main-container">
      <div className="rounded mx-auto px-3 py-5 form-container">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="text-center d-flex rounded password-container">
            <input className='border-0 rounded-start pwd' type="password" value={password} placeholder='Password' readOnly/>
            <button className='px-3 py-2 border-0 bg-dark text-white rounded-end'>Copy</button>
        </div>
        <div className="d-flex inputs-container">
          <div className="d-flex align-content-center length-container">
            <input id='range' type="range" min={6} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='text-light ms-1' htmlFor="range">Length: {length} </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={setNumberAllowed} />
          </div>
        </div>  
        </div>
    </div>    
    </>
  );
}

export default App;