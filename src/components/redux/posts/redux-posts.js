import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./posts.css";

function ReduxPosts() {
  // const [posts, setPosts] = useState([]);
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  //action creator
  function fetchPosts() {
    return async (dispatch, getState) => {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      let data = await response.json();
      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    };
  }

  useEffect(() => {
    // async function fetchData() {
    //   let response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts?_limit=10"
    //   );
    //   console.log(response);
    //   let data = await response.json();
    //   setPosts(data);
    // }

    // fetchData();

    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      Posts
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id} className="post">
              <div className="title">{post.title}</div>
              <hr />
              <div>{post.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReduxPosts;
