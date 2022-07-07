import { useState } from "react";
import Counter from "./components/use-effect/counter";
import "./App.css";
import Posts from "./components/use-effect/posts";
import PostApp from "./components/postapp/post-app";
import CounterReducer from "./components/user-reducer/counter-reducer";
import ChildComp from "./components/render-props/child-comp";
import Datatable from "./components/render-props/datatable";

function App() {
  const [toggle, setToggle] = useState(true);

  const rows = [
    {
      id: 1,
      cell: () => "Cell1",
    },
    {
      id: 2,
      cell: () => <Progressbar progress={70} bgcolor="red" />,
    },
    {
      id: 3,
      cell: () => <h1>Cell3</h1>,
    },
  ];

  return (
    <div className="App">
      {/* {toggle && <Counter />}
      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button> */}
      {/* <Posts /> */}
      {/* <PostApp /> */}
      {/* <CounterReducer /> */}
      {/* <ChildComp render={() => <h2>Hi All</h2>} />
      <ChildComp render={() => <h2>Render Prop</h2>} />
      <ChildComp render={() => <CounterReducer />} /> */}
      <Datatable rows={rows} />
    </div>
  );
}

export default App;

function Progressbar({ bgcolor = "orange", progress = 0 }) {
  const Parentdiv = {
    // height: height,
    heigh: "20px",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 5,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 5,
    textAlign: "right",
  };

  const progresstext = {
    padding: 5,
    color: "black",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}
