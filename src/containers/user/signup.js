import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Notifications, { notify } from "react-notify-toast";

import { jsonStringify } from "utils/jsonHelper";
import Signup from "components/user/signup";
import { registerUser } from "actions/userActions";

/**
 * User registration Container Component for registering users.
 *
 */

export class UserSignup extends React.Component {
  // Prevent default submit event trigger(synthetic event):
  signUp = e => {
    e.preventDefault();
    let userCredential = {
      username: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };
    this.props.registerUser(jsonStringify(userCredential)).then(() => {
      this.props.history.push("/login");
      notify.show("Successfully registered, please login", "success");
    });
  };

  render() {
    return (
      <div>
        <Signup signUp={this.signUp} />
        <Notifications />
      </div>
    );
  }
}

// validate props
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
