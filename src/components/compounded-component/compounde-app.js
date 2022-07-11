import React, { useContext, useState } from "react";
import "./nav.css";
export default function CompoundedApp() {
  return (
    <div className="container app">
      <Nav>
        <Nav.NavElem title="Home" />
        <Nav.NavElem title="About" />
        <Nav.NavElem title="Contact" />
      </Nav>
    </div>
  );
}

const NavContext = React.createContext();

export function Nav({ children }) {
  const [activeTitle, setActiveTitle] = useState("");
  return (
    <NavContext.Provider value={{ activeTitle, setActiveTitle }}>
      <nav className="nav">{children}</nav>
    </NavContext.Provider>
  );
}

function NavElem({ title }) {
  const { activeTitle, setActiveTitle } = useContext(NavContext);
  return (
    <div
      className={`nav-elem ${title == activeTitle ? "active" : ""}`}
      onClick={() => setActiveTitle(title)}
    >
      {title}
    </div>
  );
}

Nav.NavElem = NavElem;
