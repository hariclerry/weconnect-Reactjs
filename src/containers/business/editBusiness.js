import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { notify } from "react-notify-toast";

import EditBusiness from "components/business/editBusiness";
import { jsonStringify } from "utils/jsonHelper";
import { editBusiness } from "actions/businessActions";
import { checkIfUserIsLoggedIn } from "actions/userActions";

/**
 * Edit business Container Component for editing businesses
 *
 */

class EditBusinessContainer extends React.Component {
  // Initialise local state
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      location: "",
      description: ""
    };
  }
  // event handler for editing business
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componenWillMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }

  // Use of e event to Prevent default button behaviour (synthetic event):
  updateBusiness = e => {
    e.preventDefault();
    let businessCredential = {
      name: e.target.elements.name.value,
      category: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value
    };
    const businessId = this.props.match.params.id;
    this.props
      .editBusiness(businessId, jsonStringify(businessCredential))
      .then(() => {
        this.props.history.push("/dashboard");
        notify.show("Business Successfully Edited", "success");
      });
  };

  render() {
    console.log(this.state);
    return (
      <EditBusiness
        {...this.props.business}
        handleChange={this.handleChange}
        updateBusiness={this.updateBusiness}
      />
    );
  }
}

// Validate props
EditBusiness.protoTypes = {
  email: PropTypes.string.isRequired,
  editBusiness: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    email: state.auth.loginData.email,
    business: state.business.singleBusinessMessage.business_data
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { editBusiness }
  )(EditBusinessContainer)
);
