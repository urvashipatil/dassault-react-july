import React, { useContext } from "react";
import { PostContext } from "./post-context";

function Post({ post }) {
  // const contextValue = useContext(PostContext);
  // console.log("contextValue", contextValue);

  const { onDeleteMethod, setUserName, userName } = useContext(PostContext);

  const onDelete = () => {
    // alert("delete button");
    // onDeletePost(post);
    onDeleteMethod(post);
    setUserName("Mannavi Sachdev");
  };
  return (
    <li key={post.id} className="post">
      <div>{userName}</div>
      <div className="title">{post.title}</div>
      <hr />
      <div>{post.body}</div>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Post;
