import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { NotificationManager } from "react-notifications";

import { registerBusiness } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";
import { jsonStringify } from "../utils/jsonHelper";
import RegisterBusiness from "../components/registerBusiness";


class AddBusiness extends React.Component {
  componentWillReceiveProps(recieved) {
    if (
      recieved &&
      recieved.business.message === "Business successfully registered"
    ) {
      this.props.history.push("/dashboard");
    } else {
      if (recieved && recieved.business.status === "failure") {
        NotificationManager.error(recieved.business.message, "", 5000);
      }
    }
  }

  componenWillMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }

  createBusiness = e => {
    e.preventDefault(); // Prevent link from opening the URL(synthetic event):
    let businessCredential = {
      name: e.target.elements.name.value,
      category: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value
    };
    this.props.registerBusiness(jsonStringify(businessCredential));
  };
  render() {
    return (
      <div>
        {/* User defined component */}
       <RegisterBusiness
       createBusiness={this.createBusiness}
       />
      </div>
    );
  }
}

// Validate/ensure the right props is used and is required
RegisterBusiness.protoTypes = {
  email: PropTypes.string.isRequired,
  registerBusiness: PropTypes.func.isRequired
};

// receive application state from the store and make data avilable to component as props
const mapStateToProps = state => ({
  email: state.auth.loginData.email,
  business: state.business.createBusinessMessage
});

// Connect function subscribes the container component to the store, so that it will be alerted when state changes.
export default withRouter(
  connect(
    mapStateToProps,
    { registerBusiness }
  )(AddBusiness)
);
