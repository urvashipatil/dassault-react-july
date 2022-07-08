import React, { useState, useCallback, useMemo } from "react";

export function ReactUseCallbackApp() {
  console.log("Parent Rendering");
  const [counter, setCounter] = useState(0);
  const [myName, setMyName] = useState("");

  const onNameChange = (e) => {
    setMyName(e.target.value);
  };
  const updateCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);
  return (
    <div className="container">
      <h3>react-usecallback-app</h3>
      <div>Counter - {counter}</div>
      <div>{myName}</div>
      <label>Name:</label>
      <input type="text" value={myName} onChange={onNameChange} />
      <button onClick={() => setCounter(counter + 1)}>Parent Here</button>
      <Child counter={counter} updateCounter={updateCounter} />
    </div>
  );
}

const Child = React.memo(function Child({ counter, updateCounter }) {
  console.log("child Rendering");
  const childNumber = useMemo(() => {
    let childNumer = 0;
    for (let i = 0; i < 500000000; i++) {
      childNumer++;
    }
    return childNumer;
  }, []);
  return (
    <div className="child">
      I am child -{counter}
      <div>
        <button onClick={() => updateCounter()}>Child Click</button>
        <div>{childNumber}</div>
      </div>
    </div>
  );
});
