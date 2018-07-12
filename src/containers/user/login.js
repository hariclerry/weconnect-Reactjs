import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {notify} from "react-notify-toast";

import { loginUser } from "actions/userActions";
import { jsonStringify } from "utils/jsonHelper";
import Login from "components/user/login";


export class UserLogin extends React.Component {
      // componentWillMount() {
      //   notify.show("Successfully logged in", "success");
      // }


  Login = e => {
    e.preventDefault(); //o prevent the default link behavior of opening a new page
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
        // alert("Wrong email or password");
        notify.show("Wrong user password or email", "warning");
      });
  };
  render() {

    return (
      <div>
        <Login 
        Login={this.Login}/>
      </div>
      
    );
  }
}

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
