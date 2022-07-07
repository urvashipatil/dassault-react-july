import { useState } from "react";
import Counter from "./components/use-effect/counter";
import "./App.css";
import Posts from "./components/use-effect/posts";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      {/* {toggle && <Counter />}
      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button> */}
      <Posts />
    </div>
  );
}

export default App;
