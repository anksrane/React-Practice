import React from "react";
// Without React Memo
// function Child({ value }) {
//   console.log("Child rendered");
//   return <h1>Child  {value}</h1>;
// }

// With React Memo
const Child = React.memo(({ value }) => {
  console.log("Child rendered");

  return <p>I am a child component</p>;
});

export default Child;