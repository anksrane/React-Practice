import React from "react";

const ChildCallbakcEg = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

export default ChildCallbakcEg;
