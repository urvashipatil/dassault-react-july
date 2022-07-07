import { useReducer } from "react";
import { INCREMENT, DECREMENT } from "./counter-actions";

function counterReducer(currentState, { type, payload }) {
  // debugger;
  //update the state
  switch (type) {
    case INCREMENT:
      return currentState + payload;
    case DECREMENT:
      return currentState - payload;
    // default:
    //   return currentState;
  }

  return currentState;
}

export default function CounterReducer() {
  const [counter, dispatch] = useReducer(counterReducer, 0);  

  const increment = function () {
    dispatch({ type: INCREMENT, payload: 5 });
    // dispatch({ type: INCREMENT, payload: 5 });
    // dispatch({ type: INCREMENT, payload: 5 });
  };
  const decrement = () => {
    if (counter <= 0) {
      return;
    }
    dispatch({ type: DECREMENT, payload: 1 });
  };
  return (
    <>
      <div>
        <h1>Counter using useReducer</h1>
      </div>
      <h2>{counter}</h2>
      <span>
        <input type="button" value="+" onClick={increment} />
      </span>
      <span>
        <input type="button" value="-" onClick={decrement} />
      </span>
    </>
  );
}
