import { useState } from "react";
import Counter from "./components/use-effect/counter";
import "./App.css";
import Posts from "./components/use-effect/posts";
import PostApp from "./components/postapp/post-app";
import CounterReducer from "./components/user-reducer/counter-reducer";
import ChildComp from "./components/render-props/child-comp";
import Datatable from "./components/render-props/datatable";
import Progressbar from "./components/render-props/progress";
import { Image, WithBorder, WithTransparent } from "./components/HOC/image";

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

  const WithBorderIMage = WithBorder(Image);
  const WithTransparentImage = WithTransparent(Image);
  const WithBorderTransparentImage = WithTransparent(WithBorder(Image));

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
      {/* <Datatable rows={rows} /> */}
      <Image src="/logo192.png" width="100px" />
      <WithBorderIMage src="/logo192.png" width="100px" />
      <WithTransparentImage src="/logo192.png" width="100px" />
      <WithBorderTransparentImage src="/logo192.png" width="100px" />
    </div>
  );
}

export default App;
