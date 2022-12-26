import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="logo">Website</div>

      <ul>
        <li>
          <NavLink to={"/"}>Log In</NavLink>
        </li>
        <li>
          <NavLink to={"/sign-in-page"}>Sign In</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/users-page"}>Users</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
