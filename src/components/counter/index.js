import React, { useState, useEffect } from "react";
import { useCounter } from "../custom-hooks/use-counter";
import { useDocumentTitle } from "../custom-hooks/use-document-title";
import { useDyanmicTitle } from "../custom-hooks/use-dynamic-title";

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // useDocumentTitle("My Counter");
  const updateTitle = useDyanmicTitle("My New Cunter");
  const { counter, increment, decrement } = useCounter(10, 2);

  // useEffect(() => {
  //   document.title = "My Counter";
  // }, []);

  // useEffect(() => {
  //   document.title = `My Counter -${counter}`;
  // }, [counter]);

  useEffect(() => {
    updateTitle(counter);
  }, [counter]);

  // function increment() {
  //   setCounter(counter + 1);
  //   // updateTitle(counter + 1);
  // }

  // function decrement() {
  //   setCounter(counter - 1);
  //   // updateTitle(counter - 1);
  // }

  return (
    <div className="counter">
      <h1>using custom hook {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
