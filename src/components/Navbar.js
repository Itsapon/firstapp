//imports
import React from "react";
import { Link, NavLink } from "react-router-dom";

//component function
export default function Navbar() {
  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        <Link to="/" exact>
          Home
        </Link>
        {" - "}
        <Link to="/about">About</Link>
        {" - "}
        <Link to="/discover">Discover</Link>
      </ul>
    </div>
  );
}
