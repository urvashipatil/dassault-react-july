import React, { useState, useCallback } from "react";

export function ReactMemoApp() {
  console.log("Parent Rendering");
  const [counter, setCounter] = useState(0);
  const arr = [1, 2, 3];

  return (
    <div className="container">
      <h3>react-memo-app</h3>
      <div>Counter - {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Parent Here</button>
      <Child arr={arr} />
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  if (prevProps.arr.join("") == nextProps.arr.join("")) {
    return true;
  }
  return false;
}
const Child = React.memo(function Child({ arr }) {
  console.log("child Rendering");
  return <div className="child">I am child - {arr.join(",")}</div>;
}, areEqual);
