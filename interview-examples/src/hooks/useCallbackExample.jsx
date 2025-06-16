import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("🔁 Child re-rendered");
  return (
    <div className="border p-4 rounded">
      <p className="mb-2">I am a memoized child</p>
      <button onClick={onClick} className="bg-blue-500 text-white px-4 py-1 rounded">Child Button</button>
    </div>
  );
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // ✅ Memoized function using useCallback
  const handleClick = useCallback(() => {
    console.log("🖱️ Button in child clicked");
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">useCallback Example</h2>

      <p className="mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-green-600 text-white px-4 py-2 rounded mr-4"
      >
        Increment Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}