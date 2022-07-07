import React from "react";

export const PostContext = React.createContext();

export const UserContext = React.createContext({
  firstName: "John",
  role: "Admin",
});
