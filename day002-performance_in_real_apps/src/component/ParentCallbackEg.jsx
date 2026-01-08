import { useCallback, useState } from "react";
import ChildCallbakcEg from "./ChildCallbakcEg";

function ParentCallbackEg() {
  console.log("Parent rendered");
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log("Button clicked");
  // };  
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  },[]);

  return (
    <>
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ChildCallbakcEg onClick={handleClick} />
    </div>
    </>
  );
}

export default ParentCallbackEg;
