import React, { useState, useEffect } from "react";
import axios from "axios";
export default function CustomInputApp() {
  const [text, setText] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      let userInfo = await getUser();
      setUser(userInfo);
    }
    fetchUser();
  }, []); //
  const getUser = async () => {
    let resp = await axios.get(
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    );
    let data = resp.data;
    if (data.length > 0) {
      return data[0];
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>Input:</div>
      {user && <div>username: {user.name}</div>}
      <CustomInput value={text} onChange={handleChange}>
        <label>Search</label>
      </CustomInput>
      <p> You typed: {text ? text : "..."}</p>
    </>
  );
}

function CustomInput({ children, value, onChange }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        type="text"
        id="search"
        placeholder="Example"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
