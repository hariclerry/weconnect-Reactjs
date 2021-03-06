import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { notify } from "react-notify-toast";

import { singleBusiness, deleteBusiness } from "actions/businessActions";
import { checkIfUserIsLoggedIn } from "actions/userActions";
import SingleBusiness from "components/business/business";

/**
 * Single business Container Component for displaying information of a single business.
 *
 */

class Business extends React.Component {
  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
    const { id } = this.props.match.params;
    this.props.singleBusiness(id);
  }
  // Business delete function
  deleteBusiness = id => {
    if (window.confirm("Are you sure you want to delete this business?")) {
      this.props.deleteBusiness(id).then(() => {
        this.props.history.push("/dashboard");
        notify.show("Business Successfully Deleted", "success");
      });
    }
  };

  render() {
    // Deconstructing an props/object
    const { business } = this.props;
    return (
      <SingleBusiness
        business={business}
        deleteBusiness={this.deleteBusiness}
      />
    );
  }
}
// Validate props
SingleBusiness.protoTypes = {
  email: PropTypes.string.isRequired,
  singleBusiness: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.loginData.email,
    business: state.business.singleBusinessMessage.business_data,
    businessId: ownProps.match.params.id,
    deletedBusiness: state.business.deleteBusinessMessage
  };
};

const mapDispatchToProps = dispatch => ({
  singleBusiness: id => dispatch(singleBusiness(id)),
  deleteBusiness: id => dispatch(deleteBusiness(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Business)
);
