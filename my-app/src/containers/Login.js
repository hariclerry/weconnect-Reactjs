import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { NotificationManager } from 'react-notifications';

import { loginUser } from "../actions/userActions";
import { jsonStringify } from "../utils/jsonHelper";
import Login from "../components/login";


class UserLogin extends React.Component {
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
        console.log(err.data);
        alert("Wrong email or password");
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
  )(UserLogin)
);
