// import { useReducer } from "react";
// import counterReducer from "./counter-reducer";
import { useSelector, useDispatch } from "react-redux";

//Action creator
function IncrementCreator() {
  return { type: "INCREMENT", payload: 1 };
}

export default function ReduxCounter() {
  // const [counter, dispatch] = useReducer(counterReducer, 0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = function () {
    dispatch(IncrementCreator());
  };
  const decrement = () => {
    if (counter <= 0) {
      return;
    }
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  return (
    <>
      <div>
        <h1>Counter using Redux</h1>
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
