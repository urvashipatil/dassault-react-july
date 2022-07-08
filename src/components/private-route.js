import { Route } from "react-router-dom";

function PrivateRoute({ children, isLogin, ...restProps }) {
  return (
    <Route {...restProps}>
      {isLogin
        ? children
        : () => <h2>You are not allowed to view this page</h2>}
    </Route>
  );
}

export default PrivateRoute;

//<Redirect to="/" />
