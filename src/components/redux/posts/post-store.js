import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { postReducer } from "./post-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

let enhancers = applyMiddleware(ReduxThunk);

const composedEnhancers = composeWithDevTools(enhancers);

const store = createStore(postReducer, [], composedEnhancers);

//Combine reducers
// const store = createStore(
//   combineReducers({
//     counter: counterReducer,
//     posts: postReducer,
//   }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

console.log(store.getState());

export default store;
