import React from "react";

import Notifications from "react-notify-toast";

import Footer from "components/common/footer";
import AuthNavbar from "components/common/authNavbar";
import "static/css/fix-footer.css";
import "static/css/bootstrap.min.css";
import "static/css/stylesform.css";

const Login = ({ Login }) => (
  <div>
  <Notifications />
    <AuthNavbar />
    <div className="container">
      <h3> Please sign in to do more</h3>
    </div>
    <hr />
    <div className="container" id="log-in-form">
      <div className="heading">
        <h1 style={{ textShadow: "0 0 0 black", color: "#000000" }}>
          Log In Your Account
        </h1>
      </div>
      <form onSubmit={Login}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="pwd"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group form-group-btn">
          <button
            type="submit"
            className="btn btn-success btn-lg"
            style={{ marginTop: "20%" }}
          >
            Log In
          </button>
        </div>
        <div className="clearfix" />
      </form>
    </div>
    <Footer />
  </div>
);

export default Login;
