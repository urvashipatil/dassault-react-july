import React, { useState, useEffect, useRef } from "react";

function PostForm({ onAddPost }) {
  // const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [count, setCount] = useState(0);
  const formRef = useRef();

  const dynamicFormRef = useRef({});
  // console.log("fromRef", formRef);

  // let formCtrl = null;
  // useEffect(() => {
  //   console.log("select from control");
  //   formCtrl = document.getElementById("frmPost");
  // }, []);

  useEffect(() => {
    formRef.current.elements.title.focus();
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    //using controlled control approach
    // console.log("newPost", newPost);
    // onAddPost(newPost);

    //using uncontrolled input
    //need handle point to a form
    // console.log(formCtrl.elements.title.value);
    // let newPost = {
    //   title: formCtrl.elements.title.value,
    //   body: formCtrl.elements.body.value,
    // };
    // onAddPost(newPost);

    //using useRef uncontrolled
    // let newPost = {
    //   title: formRef.current.elements.title.value,
    //   body: formRef.current.elements.body.value,
    // };
    // onAddPost(newPost);

    //using useRef uncontrolled by passing function to ref
    console.log("dynamicFormRef", dynamicFormRef);
    let newPost = {
      title: dynamicFormRef.current.title.value,
      body: dynamicFormRef.current.body.value,
    };
    onAddPost(newPost);
  };

  // const onChangeInput = (e) => {
  //   setNewPost({
  //     ...newPost,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>set count - {count}</button>
      <form ref={formRef} id="frmPost" name="frmPost" onSubmit={onSubmitForm}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            // value={newPost.title}
            // onChange={onChangeInput}
            ref={(el) => {
              dynamicFormRef.current["title"] = el;
            }}
          ></input>
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            name="body"
            id="body"
            // value={newPost.body}
            // onChange={onChangeInput}
            ref={(el) => {
              dynamicFormRef.current["body"] = el;
            }}
          ></input>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default PostForm;
