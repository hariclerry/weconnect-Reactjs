import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from "react-notifications";
import "./static/css/bootstrap.min.css";
import { registerBusiness } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";
import Footer from "./Footer";
import NavBar from "./NavBar";

class RegisterBusiness extends React.Component {
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

  jsonStringify = object => {
    let simpleObj = {};
    for (let prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof object[prop] === "object") {
        continue;
      }
      simpleObj[prop] = object[prop];
    }
    return JSON.stringify(simpleObj);
  };

  createBusiness = e => {
    e.preventDefault(); // Prevent link from opening the URL(synthetic event):
    let businessCredential = {
      name: e.target.elements.name.value,
      category: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value
    };
    this.props.registerBusiness(this.jsonStringify(businessCredential));
  };
  render() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <h3> You can now Register your Business</h3>
        </div>
        <hr />
        <div style={{ margin: "100px" }}>
          <form onSubmit={this.createBusiness}>
            <div className="form-group">
              <label className="control-label requiredField" htmlFor="title">
                Business Name:
              </label>
              <input
                className="form-control"
                name="name"
                id="title"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="control-label " htmlFor="category">
                Business Category:
              </label>
              <input
                className="form-control"
                id="category"
                name="category"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="control-label " htmlFor="location">
                Business Location:
              </label>
              <input
                className="form-control"
                id="location"
                name="location"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="control-label " htmlFor="description">
                Business Description:
              </label>
              <textarea
                className="form-control"
                cols="40"
                id="description"
                name="description"
                rows="10"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary " name="submit" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

RegisterBusiness.protoTypes = {
  email: PropTypes.string.isRequired,
  registerBusiness: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: state.auth.loginData.email,
  business: state.business.createBusinessMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerBusiness }
  )(RegisterBusiness)
);
