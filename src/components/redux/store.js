import { createStore } from "redux";
import counterReducer from "./counter-reducer";

const initalState = { counter: 0, posts: [] };

// initalState={
//   counter:0,
//   posts:[]
// }

const store = createStore(
  counterReducer,
  initalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Initial State", store.getState());

export default store;
