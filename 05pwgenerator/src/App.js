import './App.css';
import { useState,useCallback,useEffect,useRef } from "react";

function App(){
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  // useRef Hook
  const passwordRef=useRef(null);

  // useCallback Hook
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    console.clear();
    if(numberAllowed) str+="0123456789";
    console.log("numberAllowed",numberAllowed);
    if(charAllowed) str+="!@#$%^&*()_+-={}[]|:;<>,.?/";
    console.log("charAllowed",charAllowed);
    for (let i = 1; i <= length; i++) {
      let char=Math.round(Math.random()*str.length+1);
      pass+=str.charAt(char);      
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed])
  
  const copyPwToClipboard=useCallback(()=>{
    // show selected in input text
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect Hook
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-100 vh-100 d-flex flex-column justify-content-center main-container">
      <div className="rounded mx-auto px-3 py-5 form-container">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="text-center d-flex rounded password-container">
            <input className='border-0 rounded-start pwd' type="text" value={password} placeholder='Password' ref={passwordRef} readOnly/>
            <button onClick={copyPwToClipboard} className='px-3 py-2 border-0 bg-dark text-white rounded-end'>Copy</button>
        </div>
        <div className="mt-3 d-flex inputs-container">
          <div className="d-flex align-content-center length-container">
            <input id='range' type="range" min={6} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='text-light ms-1' htmlFor="range">Length: {length} </label>
          </div>
          <div className="ms-2 checkbox-container">
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowed((prev)=>!prev)
              }} />
              <label htmlFor="numberInput" className='ms-1 text-white'>Numbers</label>
          </div>
          <div className="ms-2 checkbox-container">
            <input type="checkbox" id="charaterInput" defaultChecked={charAllowed} onChange={()=>{
              setcharAllowed((prev)=>!prev)
              }} />
              <label htmlFor="charaterInput" className='ms-1 text-white'>Charater</label>
          </div>          
        </div>  
        </div>
    </div>    
    </>
  );
}

export default App;