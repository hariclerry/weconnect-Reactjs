import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import { fetchBusinesses } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";
import Businesses from "../components/businessList";

class BusinessList extends React.Component {
  componentWillReceiveProps(recieved) {
    if (recieved.business) {
      if (recieved.business.message === "Business successfully registered") {
        this.props.history.push("/businesslist");
      } else {
        if (recieved && recieved.business.status === "failure") {
          NotificationManager.error(recieved.business.message, "", 5000);
        }
      }
    }
  }

  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
     //  execute fetch business function
    this.props.fetchBusinesses();
  }

  render() {

    // returns all businesses from props int a dict
    const businesses = Object.values({ ...this.props.business.business_data });

    // sorts/arrange business from recently added to previous
    if (businesses) {
      Array.prototype.reverse.call(businesses);
    }
    return (

        <Businesses
        businesses={businesses}
        />
  
    );
  }
}

BusinessList.protoTypes = {
  email: PropTypes.string.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
  businesses: PropTypes.object
};

const mapStateToProps = state => ({
  email: state.auth.loginData.email,
  business: state.business.fetchBusinessMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchBusinesses }
  )(BusinessList)
);
