import React, { useState, useEffect } from "react";
import "./post.css";

function Posts() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //call api

    async function fetchData() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      console.log(response);
      let data = await response.json();

      setPostList(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      List of Posts
      <ul className="posts">
        {isLoading && <div>Loading...Please wait</div>}
        {!isLoading && postList.length == 0 && <div>No Posts found</div>}
        {postList.map((post) => {
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

export default Posts;
