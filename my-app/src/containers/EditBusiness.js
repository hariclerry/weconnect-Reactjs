import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from "react-notifications";
import EditBusiness from "../components/EditBusiness";
import { jsonStringify } from '../utils/jsonHelper'
import "../components/static/css/bootstrap.min.css";
import { editBusiness } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";
import "../components/static/css/bootstrap.min.css";
// TO DO: import {checkIfUserIsLoggedIn} from '../actions/userActions';

class EditBusinessContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      location: "",
      description: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componenWillMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }

  updateBusiness = e => {
    e.preventDefault(); // Prevent link from opening the URL(synthetic event):
    let businessCredential = {
      name: e.target.elements.name.value,
      category: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value
    };
    const businessId = this.props.match.params.id;
    this.props.editBusiness(businessId, jsonStringify(businessCredential));
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
