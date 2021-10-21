//imports
import React from "react";
import { Link, NavLink } from "react-router-dom";

//component function
export default function Navbar() {
  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        <NavLink
          to="/"
          activeStyle={{ fontWeight: "bold", color: "red" }}
          exact
        >
          Home
        </NavLink>
        {" - "}
        <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}>
          About
        </NavLink>
        {" - "}
        <NavLink
          to="/discover"
          activeStyle={{ fontWeight: "bold", color: "red" }}
        >
          Discover
        </NavLink>
      </ul>
    </div>
  );
}
