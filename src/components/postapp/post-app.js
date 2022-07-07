import React, { useState, useEffect } from "react";
import PostList from "./post-list";
import { PostContext } from "./post-context";
import "./post-app.css";
import Post from "./post";

function PostApp() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("Urvashi Sachdev");

  const onDeletePost = (post) => {
    alert(post.id);
    console.log("delete this post", post);
    //updating state- postList
    let filteredPostList = postList.filter((item) => {
      return item.id != post.id;
    });
    // console.log(filteredPostList.length);
    setPostList(filteredPostList);
  };

  useEffect(() => {
    //call api

    async function fetchData() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
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
      Post App
      <PostContext.Provider
        value={{ onDeleteMethod: onDeletePost, userName, setUserName }}
      >
        <PostList
          posts={postList}
          isLoading={isLoading}
          // onDeletePost={onDeletePost}
        />
      </PostContext.Provider>
      {/* <Post post={{ id: 123, title: "dummy", body: "dummy Body" }} /> */}
    </div>
  );
}

export default PostApp;
