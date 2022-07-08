import React, { useState, useCallback } from "react";

export function ReactMemoApp() {
  console.log("Parent Rendering");
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h3>react-memo-app</h3>
      <div>Counter - {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Parent Here</button>
      <Child />
    </div>
  );
}

const Child = React.memo(function Child() {
  console.log("child Rendering");
  return <div className="child">I am child</div>;
});
