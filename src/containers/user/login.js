import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "actions/userActions";
import { jsonStringify } from "utils/jsonHelper";
import Login from "components/user/login";

/**
 * User Login Container Component for logging in users.
 *
 */

export class UserLogin extends React.Component {
  // Prevent default submit event trigger(synthetic event):
  Login = e => {
    e.preventDefault();
    let userCredential = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };
    this.props
      .loginUser(jsonStringify(userCredential))
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        err.notify.show("Wrong email or password", "warning");
      });
  };
  render() {
    return (
      <div>
        <Login Login={this.Login} />u
      </div>
    );
  }
}
// Validate props
Login.propTypes = {
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
  )(UserLogin)
);
