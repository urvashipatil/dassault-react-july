import React from "react";

export function Image(props) {
  return <img {...props} />;
}

export function WithBorder(Component) {
  return (props) => (
    <Component {...props} style={{ border: "2px solid red" }} />
  );
}

export function WithTransparent(Component) {
  return (props) => <Component {...props} className="transparent" />;
}
