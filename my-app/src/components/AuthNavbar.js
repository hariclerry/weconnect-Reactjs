import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          WeConnect
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink to="/signup">
            <span className="glyphicon glyphicon-user" /> Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <span className="glyphicon glyphicon-log-in" /> Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default AuthNav;
