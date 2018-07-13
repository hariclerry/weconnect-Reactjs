import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { checkIfUserIsLoggedIn } from "actions/userActions";
import { userBusinesses } from "actions/businessActions";
import Dashboard from "components/business/dashboard";

/**
 * User dashboard Container Component for displaying list of businesses belonging to the logged in user.
 *
 */

export class UserDashboard extends React.Component {
  componentDidMount() {
    this.props.userBusinesses(localStorage.getItem("user_id"));
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
  }

  render() {
    // Display all businesses from props as an array
    const businesses = Object.values({ ...this.props.business.business_data });

    // sorts/arranges business from recently added to previously added
    if (businesses) {
      Array.prototype.reverse.call(businesses);
    }

    return (
      <div>
        <Dashboard businesses={businesses} username={this.props.username} />
      </div>
    );
  }
}

// Validate props

Dashboard.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userBusinesses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: state.auth.loginData.email,
  username: state.auth.loginData.username,
  business: state.business.userBusinessMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { checkIfUserIsLoggedIn, userBusinesses }
  )(UserDashboard)
);
