import React, { useState, useEffect } from "react";
import { useCounter } from "../custom-hooks/use-counter";
import { useDocumentTitle } from "../custom-hooks/use-document-title";
import { useDyanmicTitle } from "../custom-hooks/use-dynamic-title";
import useAsyncError from "../../components/custom-hooks/use-async-error";
console.log("Counter...");

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // useDocumentTitle("My Counter");
  const updateTitle = useDyanmicTitle("My New Cunter");
  const { counter, increment, decrement } = useCounter(10, 2);
  const throwUncatchedError = useAsyncError();
  const h = null;
  // useEffect(() => {
  //   document.title = "My Counter";
  // }, []);

  // useEffect(() => {
  //   document.title = `My Counter -${counter}`;
  // }, [counter]);

  useEffect(() => {
    // let t = h.toString();
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
      {/* <div>hi={h.toString()}</div> */}
      <h1>using custom hook {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <button
        onClick={() => {
          try {
            console.log(h.toString());
          } catch (e) {
            throwUncatchedError(e);
          }
        }}
      >
        Create Error
      </button>
    </div>
  );
};

export default Counter;
