import { useState } from "react";
import Counter from "./components/use-effect/counter";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && <Counter />}

      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button>
    </div>
  );
}

export default App;
