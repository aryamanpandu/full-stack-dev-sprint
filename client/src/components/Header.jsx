import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Foodie</Link>
      </div>
      <ul className="nav-links">
        {/* <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/add-task">New Task</Link>
        </li> */}
        <li>
          <Link to = "/browse">Browse Food</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Header;
