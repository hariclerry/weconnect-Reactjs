import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import EditBusiness from "../components/editBusiness";
import { jsonStringify } from "../utils/jsonHelper";
import { editBusiness } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";

class EditBusinessContainer extends React.Component {

  // componentWillReceiveProps(recieved) {
  //   if (
  //     recieved &&
  //     recieved.business.message === "Business successfully registered"
  //   ) {
  //     this.props.history.push("/dashboard");
  //   } else {
  //     if (recieved && recieved.business.status === "failure") {
  //       NotificationManager.error(recieved.business.message, "", 5000);
  //     }
  //   }
  // }
  
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

  // Prevent link from opening the URL(synthetic event):
  updateBusiness = e => {
    e.preventDefault(); 
    let businessCredential = {
      name: e.target.elements.name.value,
      category: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value
    };
    const businessId = this.props.match.params.id;
    this.props.editBusiness(businessId, jsonStringify(businessCredential));
    this.props.history.push("/dashboard");
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
