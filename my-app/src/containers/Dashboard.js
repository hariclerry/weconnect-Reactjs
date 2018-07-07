import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { checkIfUserIsLoggedIn } from "../actions/userActions";
import { userBusinesses } from "../actions/businessActions";
import Dashboard from "../components/Dashboard";

// TO DO: import { NotificationManager } from "react-notifications";

class UserDashboard extends React.Component {
  componentDidMount() {
    this.props.userBusinesses(localStorage.getItem("user_id"));
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }

  render() {
    // Display all businesses from props into a dict
    const businesses = Object.values({ ...this.props.business.business_data });

    // sorts/arranges business from recently added to previous
    if (businesses) {
      Array.prototype.reverse.call(businesses);
    }

    return (
      <div>
      <Dashboard 
      businesses={businesses}/>
      </div>
    );
  }
}

// Validate props

Dashboard.propTypes = {
  email: PropTypes.string.isRequired,
  userBusinesses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: state.auth.loginData.email,
  business: state.business.userBusinessMessage
});

export default connect(
  mapStateToProps,
  { checkIfUserIsLoggedIn, userBusinesses }
)(UserDashboard);
