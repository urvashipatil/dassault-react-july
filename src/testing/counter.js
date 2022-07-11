import React, { useEffect } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState("");
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  useEffect(() => {
    if (count < 0) {
      setError("Count can not be less than 0");
    } else if (error) {
      setError("");
    }
  }, [count]);
  return (
    <div>
      <div data-testid="message">Current count: {count}</div>
      <button name="test" onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Counter;
