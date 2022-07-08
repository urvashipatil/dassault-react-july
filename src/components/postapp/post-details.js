import { useEffect } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  Link,
  Route,
} from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const myLocation = useLocation();
  const history = useHistory();
  // console.log("myParams", myParams);
  console.log("myLocation query string", myLocation.search);
  console.log("myLocation", myLocation);
  console.log("history", history);
  useEffect(() => {
    //call api assignment/hw
    //https://jsonplaceholder.typicode.com/posts/2
    //
  }, []);

  const onNavigate = () => {
    //....
    history.push("/counter");
  };

  return (
    <div>
      <h3>Post-details is shown for id {id}</h3>
      <Link to={`/post/${id}/moredetails`}>More Details</Link>
      <Route
        path="/post/:id/moredetails"
        component={() => <h2>More Details</h2>}
      ></Route>
      <div>
        <button onClick={onNavigate}>Go to Counter</button>
        <button onClick={() => history.goBack()}> Back</button>
      </div>
    </div>
  );
}
