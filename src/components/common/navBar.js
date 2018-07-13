import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { logoutUser } from "actions/userActions";

const NavBar = ({ logoutUser }) => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          WeConnect
        </a>
      </div>

      <ul className="nav navbar-nav navbar-right">
      <li>
          <NavLink to={`/resetpassword/`}>Reset Password</NavLink>
        </li>
        <li style={{ marginTop: "15px", marginRight: "12px" }}>
          <button
            onClick={() => logoutUser()}
            style={{
              color: "#b3b3b3",
              border: "none",
              backgroundColor: " #000000"
            }}
          >
            <span className="glyphicon glyphicon-log-out" /> Logout
          </button>
        </li>
      </ul>
      <ul className="nav navbar-nav">
        <li>
          <NavLink to={`/dashboard`}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={`/registerbusiness`}>Register Business</NavLink>
        </li>
        <li>
          <NavLink to={`/businesslist`}>All Businesses</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    null,
    { logoutUser }
  )(NavBar)
);
