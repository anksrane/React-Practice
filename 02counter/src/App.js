import { useState } from "react";
import "./App.css";

function App() {
  // let counter=15;
  // const [VARIABLE_NAME,METHOD_NAME]=useState(INITIAL_VALUE)
  // VARIABLE_NAME is variable which you want to update
  // METHOD_NAME is method which will perform after initial stage
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
    } else {
      let msg = "can't exceed more then 20";
      alert(msg);
    }
    setCounter(counter);
    // console.log("Clicked",counter);
  };
  const removeValue = () => {
    if (counter > 1) {
      counter = counter - 1;
    } else {
      let msg = "can't decrease less than 0";
      alert(msg);
    }
    setCounter(counter);
    // console.log("Clicked",counter);
  };
  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <div className="btn-container">
        <button onClick={addValue} className="noselect add">
          <span className="text">Increase Value</span>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d="M20 10h-6V4h-4v6H4v4h6v6h4v-6h6z"/>
            </svg>
          </span>
        </button>
        <button onClick={removeValue} className="noselect remove">
          <span className="text">Decrease Value</span>
          <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="M20 10H4v4h16v-4z"/>
          </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
