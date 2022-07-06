import { useState } from "react";
import Counter from "./components/use-effect/counter";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      {toggle && <Counter />}

      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button>
    </div>
  );
}

export default App;
