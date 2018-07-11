import React from "react";

import NavBar from "components/common/navBar";
import Footer from "components/common/footer";
import "static/css/bootstrap.min.css";

const ResetUserPassword = ({Userpassword}) => (
  <div>
    <NavBar />

    <div className="container">
      <h3> You can now reset your password</h3>
    </div>
    <hr />
    <div style={{ margin: "200px 400px" }}>
    <form onSubmit={Userpassword}>
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
          <label htmlFor="pwd"> New Password:</label>
          <input
            type="password"
            className="form-control"
            name="new_password"
            id="pwd"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group form-group-btn">
          <button
            type="submit"
            className="btn btn-success btn-lg"
            style={{ marginTop: "3%" }}
          >
            Reset Password
          </button>
        </div>
        <div className="clearfix" />
      </form>
    </div>
    <Footer />
  </div>
);

export default ResetUserPassword;
