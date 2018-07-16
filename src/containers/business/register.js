import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { notify } from "react-notify-toast";

import { registerBusiness } from "actions/businessActions";
import { checkIfUserIsLoggedIn } from "actions/userActions";
import { jsonStringify } from "utils/jsonHelper";
import RegisterBusiness from "components/business/register";

/**
 * Register business Container Component for adding/registering businesses.
 *
 */

export class AddBusiness extends React.Component {
  componenWillMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }
  // Prevent default submit event trigger(synthetic event):
  createBusiness = e => {
    e.preventDefault();
    let businessCredential = {
      name: e.target.elements.name.value,
      category: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value
    };
    this.props.registerBusiness(jsonStringify(businessCredential)).then(() => {
      this.props.history.push("/dashboard");
      notify.show("Business Successfully registered", "success");
    });
  };
  render() {
    return (
      <div>
        <RegisterBusiness createBusiness={this.createBusiness} />
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
  business: state.business.registerBusinessMessage
});

// Connect function subscribes the container component to the store, so that it will be alerted when state changes.
export default withRouter(
  connect(
    mapStateToProps,
    { registerBusiness }
  )(AddBusiness)
);
