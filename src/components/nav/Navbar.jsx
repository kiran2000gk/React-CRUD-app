import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          CRUD App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="./About">
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" exact to="./Contact">
                Contact
              </NavLink>
            </li> */}
          </ul>
        </div>

        <Link className="btn btn-outline-dark m-2" to="/users/add">
          Add User
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
