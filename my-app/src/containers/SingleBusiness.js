import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

// TO DO:import { NotificationManager } from "react-notifications";
import SingleBusiness from "../components/SingleBusiness";
import { singleBusiness, deleteBusiness } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
    const { id } = this.props.match.params;
    this.props.singleBusiness(id);
    // this.setState({loaded: true})
  }

  deleteBusiness = id => {
    if (window.confirm("Are you sure you want to delete this business?")) {
      this.props.deleteBusiness(id).then(() => {
        console.log(" confirmed deleted........");
      });
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const { business } = this.props;
    const { loaded } = this.state;
    return (
      <SingleBusiness
        business={business}
        deleteBusiness={this.deleteBusiness}
        loaded={loaded}
      />
    );
  }
}
SingleBusiness.protoTypes = {
  email: PropTypes.string.isRequired,
  singleBusiness: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
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
