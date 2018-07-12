import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { notify } from "react-notify-toast";

import { passwordReset } from "actions/userActions";
import { jsonStringify } from "utils/jsonHelper";
import ResetUserPassword from "components/user/resetPassword";
import { checkIfUserIsLoggedIn } from "actions/userActions";

/**
 * User reset password Container Component for resetting users password.
 *
 */

export class ResetPassword extends React.Component {
  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }

  // Prevent default submit event trigger(synthetic event):
  Userpassword = e => {
    e.preventDefault();
    let userCredential = {
      email: e.target.elements.email.value,
      new_password: e.target.elements.new_password.value
    };
    this.props.passwordReset(jsonStringify(userCredential)).then(() => {
      this.props.history.push("/resetpassword");
      notify.show("Password Successfully Reset", "success");
    });
  };
  render() {
    return (
      <div>
        <ResetUserPassword Userpassword={this.Userpassword} />
      </div>
    );
  }
}
// Validate props
passwordReset.propTypes = {
  passwordReset: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  userPasswordReset: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userPasswordReset: state.auth.resetPasswordData,
  email: state.auth.loginData.email
});

export default withRouter(
  connect(
    mapStateToProps,
    { passwordReset, checkIfUserIsLoggedIn }
  )(ResetPassword)
);
