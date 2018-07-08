import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import { jsonStringify } from "../utils/jsonHelper";
import Signup from "../components/signup";
import { registerUser } from "../actions/userActions";



class UserSignup extends React.Component {

  componentWillReceiveProps(recieved) {
    if (
      recieved &&
      recieved.user.message === "Registration successful. Please login."
    ) {
      // this.props.history.push("/login");
    } else {
      if (recieved && recieved.user.status === "failure") {
        NotificationManager.error(recieved.user.message, "", 5000);
      }
    }
  }

  //prevent the default link behavior of opening a new page
  signUp = e => {
    e.preventDefault(); 
    let userCredential = {
      username: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };
    this.props.registerUser(jsonStringify(userCredential));
    this.props.history.push("/login");
  };
   
  render() {
    return (
      <div>
        <Signup 
        signUp={this.signUp}
        />
      </div>
    );
  }
}

Signup.protoTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.signupMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(UserSignup)
);
