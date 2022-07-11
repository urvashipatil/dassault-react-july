import { useState, lazy, Suspense } from "react";
import Counter from "./components/use-effect/counter";
import "./App.css";
import Posts from "./components/use-effect/posts";
// import PostApp from "./components/postapp/post-app";
import CounterReducer from "./components/user-reducer/counter-reducer";
import ChildComp from "./components/render-props/child-comp";
import Datatable from "./components/render-props/datatable";
import Progressbar from "./components/render-props/progress";
import { Image, WithBorder, WithTransparent } from "./components/HOC/image";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import PostDetails from "./components/postapp/post-details";
import PrivateRoute from "./components/private-route";
import MyCounter from "./components/my-counter";
import { ReactMemoApp } from "./components/memoization/react-memo-app";
import { ReactUseCallbackApp } from "./components/memoization/react-usecallback";
import ErrorBoundary from "./components/error-boundry";
import CompoundedApp from "./components/compounded-component/compounde-app";
import ReduxCounter from "./components/redux/redux-counter";
import { Provider } from "react-redux";
import CounterStore from "./components/redux/store";
const PostApp = lazy(() => import("./components/postapp/post-app"));
// const MyCounter = lazy(() => import("./components/my-counter"));

function App() {
  const [toggle, setToggle] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

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
      <Router>
        <div style={{ textAlign: "left" }}>
          <span>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Logout" : "Login"}
            </button>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" exact to="/">
              Home
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/counter">
              Counter
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/postapp">
              Post App
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/reduxcounter">
              Redux Counter
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/mycounter">
              My Counter
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/memo">
              React.memo
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/usecallback">
              UseCallback demo
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/compoundedcomp">
              Compounded Component
            </NavLink>
          </span>
          <span className="link">
            <NavLink activeClassName="active-nav" to="/redux">
              Redux
            </NavLink>
          </span>
          {/* <span className="link">
            <NavLink activeClassName="active-nav" to="/testing">
              Testing components
            </NavLink>
          </span> */}
        </div>

        <Switch>
          <Route exact path="/">
            <Image src="/logo192.png" width="100px" />
          </Route>
          {/* <Route path="/counter">
            {isLogin ? <Counter /> : <Redirect to="/" />}
          </Route> */}
          <PrivateRoute path="/counter" isLogin={isLogin}>
            <ErrorBoundary>
              <Counter />
            </ErrorBoundary>
          </PrivateRoute>
          <PrivateRoute path="/postapp" isLogin={isLogin}>
            <Suspense fallback={<h1>Loading Post App component</h1>}>
              <PostApp />
            </Suspense>
          </PrivateRoute>
          <PrivateRoute path="/post/:id" isLogin={isLogin}>
            <PostDetails />
          </PrivateRoute>
          <Route path="reduxcounter" component={CounterReducer} />
          <Route path="/mycounter">
            {/* <Suspense fallback={<h1>Loading MyCounter component</h1>}> */}
            <ErrorBoundary>
              <MyCounter />
            </ErrorBoundary>
            {/* </Suspense> */}
          </Route>
          <Route path="/memo" component={ReactMemoApp} />
          <Route path="/usecallback" component={ReactUseCallbackApp} />
          <Route path="/compoundedcomp">
            <CompoundedApp />
          </Route>
          <Route path="/redux">
            <Provider store={CounterStore}>
              <ReduxCounter />
            </Provider>
          </Route>
          <Route component={InvalidPath}></Route>
        </Switch>
        {/* {toggle && <Counter />}
      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button> */}
        {/* <Posts /> */}
        {/* <PostApp /> */}
        {/* <CounterReducer /> */}
        {/* <ChildComp render={() => <h2>Hi All</h2>} />
      <ChildComp render={() => <h2>Render Prop</h2>} />
      <ChildComp render={() => <CounterReducer />} /> */}
        {/* <Datatable rows={rows} /> */}
        {/* <Image src="/logo192.png" width="100px" />
        <WithBorderIMage src="/logo192.png" width="100px" />
        <WithTransparentImage src="/logo192.png" width="100px" />
        <WithBorderTransparentImage src="/logo192.png" width="100px" /> */}
      </Router>
    </div>
  );
}

function InvalidPath() {
  return <h4>Invalid Path</h4>;
}

export default App;
