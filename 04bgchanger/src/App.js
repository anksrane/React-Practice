import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className="w-100 vh-100 duration-200" style={{backgroundColor: color}}  >
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
      </div>
    </div>
    </>
  );
}

export default App;
