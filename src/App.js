import { useState } from "react";
import Counter from "./components/use-effect/counter";
import "./App.css";
import Posts from "./components/use-effect/posts";
import PostApp from "./components/postapp/post-app";
import CounterReducer from "./components/user-reducer/counter-reducer";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      {/* {toggle && <Counter />}
      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button> */}
      {/* <Posts /> */}
      {/* <PostApp /> */}
      <CounterReducer />
    </div>
  );
}

export default App;
