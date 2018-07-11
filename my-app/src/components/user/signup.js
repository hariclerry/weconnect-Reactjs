import React from "react";

import Notifications from "react-notify-toast";

import AuthNavbar from "components/common/authNavbar";
import Footer from "components/common/footer";
import "static/css/bootstrap.min.css";
import "static/css/jumbotron.css";
import "static/css/styles.css";


const UserRegistration = ({ signUp }) => (
 

      <div>
      <Notifications options={{zIndex: 200, top: '50px'}}/>
        <AuthNavbar />

        <div className="container">
          <h3> Please register to login</h3>
        </div>
        <hr />
        <div className="container" id="registration-form">
          <div className="image" />
          <div className="frm">
            <h1>Sign up</h1>
            <form onSubmit={signUp}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="username"
                  placeholder="Enter username"
                required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                required/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="pwd"
                  placeholder="Enter password"
                required/>
              </div>
              <div className="form-group" className="fixed">
                <button type="submit" className="btn btn-success btn-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );

    export default UserRegistration;
 
