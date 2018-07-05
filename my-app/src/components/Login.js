import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import 'react-notifications/lib/notifications.css';
// import { NotificationManager } from 'react-notifications';

import "./static/css/bootstrap.min.css";
import "./static/css/stylesform.css";
import { loginUser } from "../actions/userActions";
import Footer from "./Footer";
import AuthNavbar from "./AuthNavbar";

class Login extends React.Component {
  //     componentWillReceiveProps(recieved) {
  //         console.log(recieved)
  //         if (recieved && recieved.user.message === "You logged in successfully.") {
  //             this.props.history.push('/dashboard');
  //         }
  //         else{
  //             if(recieved && recieved.user.status === "failure"){
  //                 NotificationManager.error(recieved.user.message, "", 5000);
  //             }
  //         }
  // };

  jsonStringify = object => {
    let simpleObj = {};
    for (let prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof object[prop] === "object") {
        continue;
      }
      simpleObj[prop] = object[prop];
    }
    return JSON.stringify(simpleObj);
  };

  Login = e => {
    e.preventDefault(); //o prevent the default link behavior of opening a new page
    let userCredential = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };
    this.props
      .loginUser(this.jsonStringify(userCredential))
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err.data);
        alert("Wrong email or password");
      });
  };
  render() {
    // const user = this.props.user;
    // console.log(this.props)
    return (
      <div>
        <AuthNavbar />
        <div className="container">
          <h3> Please sign in to do more</h3>
        </div>
        <hr />
        <div className="container" id="log-in-form">
          <div className="heading">
            <h1 style={ {textShadow: "0 1px 0 black", color:"green"}}>Log In Your Account</h1>
          </div>
          <form onSubmit={this.Login}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
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

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

Login.protoTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.loginData
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser }
  )(Login)
);
