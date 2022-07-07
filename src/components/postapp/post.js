import React, { useContext } from "react";
import { PostContext, UserContext } from "./post-context";
import PropTypes from "prop-types";

function Post({ post }) {
  // const contextValue = useContext(PostContext);
  // console.log("contextValue", contextValue);

  const { onDeleteMethod, setUserName, userName } = useContext(PostContext);
  const { firstName, role } = useContext(UserContext);

  const onDelete = () => {
    // alert("delete button");
    // onDeletePost(post);
    onDeleteMethod(post);
    setUserName("Mannavi Sachdev");
  };
  return (
    <li key={post.id} className="post">
      <div>
        {userName} - {firstName} -{role}
      </div>
      <div className="title">{post.title}</div>
      <hr />
      <div>{post.body}</div>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

//<compoentName>.propTypes={}
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    // onDeletePost: PropTypes.func
  }),
};

export default Post;
