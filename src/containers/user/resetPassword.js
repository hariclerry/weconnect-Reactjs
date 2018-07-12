import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {notify} from 'react-notify-toast';

import { passwordReset } from "actions/userActions";
import { jsonStringify } from "utils/jsonHelper";
import ResetUserPassword from "components/user/resetPassword";
import { checkIfUserIsLoggedIn } from "actions/userActions";


export class ResetPassword extends React.Component {
      componentDidMount() {
        checkIfUserIsLoggedIn(this.props.email, this.props.history);
      }


  Userpassword = e => {
    e.preventDefault(); //o prevent the default link behavior of opening a new page
    let userCredential = {
      email: e.target.elements.email.value,
      new_password: e.target.elements.new_password.value
    };
    this.props
      .passwordReset(jsonStringify(userCredential))
      this.props.history.push("/login");
      // .then(() => {
      //   this.props.history.push("/login");
      // })
      // .catch(err => {
      //   // alert("Wrong email or password");
      //   notify.show("Wrong user password or email", "warning");
      // });
  };
  render() {

    return (
      <div>
        <ResetUserPassword 
        Userpassword={this.Userpassword}/>
      </div>
      
    );
  }
}

passwordReset.propTypes = {
  passwordReset: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  userPasswordReset: PropTypes.object.isRequired,
  
};

const mapStateToProps = state => ({
  userPasswordReset: state.auth.resetPasswordData,
  email: state.auth.loginData.email,
});

export default withRouter(
  connect(
    mapStateToProps,
    { passwordReset, checkIfUserIsLoggedIn }
  )(ResetPassword)
);
