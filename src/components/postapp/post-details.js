import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  // console.log("myParams", myParams);
  useEffect(() => {
    //call api assignment/hw
    //https://jsonplaceholder.typicode.com/posts/2
    //
  }, []);

  return (
    <div>
      <h3>Post-details is shown for id {id}</h3>
    </div>
  );
}
