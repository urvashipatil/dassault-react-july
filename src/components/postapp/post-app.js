import React, { useState, useEffect } from "react";
import PostList from "./post-list";
import { PostContext, UserContext } from "./post-context";
import "./post-app.css";
import Post from "./post";
import Counter from "../use-effect/counter";
import PostForm from "./post-form";
import { useDocumentTitle } from "../custom-hooks/use-document-title";
console.log("PostApp outside...");
function PostApp() {
  console.log("PostApp...");
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("Urvashi Sachdev");
  const [showAddForm, setShowAddForm] = useState(false);
  useDocumentTitle("Post application");

  // useEffect(() => {
  //   document.title = "Post application";
  // }, []);

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

  const onAddPost = (newPost) => {
    // debugger;
    console.log("from PostApp component newPost", newPost);
    let npost = { ...newPost, id: +new Date() };
    // newPost.id = +new Date(); //uuid V4

    setPostList([npost, ...postList]);
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
      {showAddForm && <PostForm onAddPost={onAddPost} />}
      <button onClick={() => setShowAddForm(!showAddForm)}>+</button>
      <PostContext.Provider
        value={{ onDeleteMethod: onDeletePost, userName, setUserName }}
      >
        <UserContext.Provider value={{ firstName: "John", role: "Developer" }}>
          <PostList
            posts={postList}
            isLoading={isLoading}
            // onDeletePost={onDeletePost}
          />
        </UserContext.Provider>
      </PostContext.Provider>
      {/* <Post post={{ id: 123, title: "dummy", body: "dummy Body" }} /> */}
    </div>
  );
}

export default PostApp;
