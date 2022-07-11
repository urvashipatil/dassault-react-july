export default function counterReducer(currentState, { type, payload }) {
  // debugger;
  //update the state
  switch (type) {
    case "INCREMENT":
      return {
        ...currentState,
        counter: currentState.counter + payload,
      };
    case "DECREMENT":
      return {
        ...currentState,
        counter: currentState.counter - payload,
      };
  }

  return currentState;
}
