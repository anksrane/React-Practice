import {useState} from 'react';
import './App.css';

function App() {
  // let counter=15;
  // const [VARIABLE_NAME,METHOD_NAME]=useState(INITIAL_VALUE)
  // VARIABLE_NAME is variable which you want to update
  // METHOD_NAME is method which will perform after initial stage
  let [counter,setCounter]=useState(10);
  const addValue=()=>{
    if(counter<20){
      counter=counter+1;
    }else{
      let msg="can't exceed more then 20";
      alert(msg);
    }
    setCounter(counter);
    // console.log("Clicked",counter);
  }
  const removeValue=()=>{
    if(counter>1){
      counter=counter-1;
    }else{
      let msg="can't decrease less than 0"
      alert(msg);
    }
    setCounter(counter);
    // console.log("Clicked",counter);
  }
  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br /><br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
