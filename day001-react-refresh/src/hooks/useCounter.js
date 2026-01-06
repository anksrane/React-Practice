import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count != 0) {
      setCount(count - 1);
    } else {
      alert("Can't go below 0");
    }
  }

  function resetCount() {
    setCount(0);
  }

  const isMin = count === 0;

  return { count, increment, decrement, resetCount, isMin };
}
