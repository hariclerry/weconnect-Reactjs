import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// TO DO:import { NotificationManager } from "react-notifications";
import { jsonStringify } from "../utils/jsonHelper";
import AddReview from "../components/AddReview";
import { singleBusiness, fetchReview, reviewBusiness } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";

/**
 * Review Container Component for adding a review and view all the reviews.
 * 
 */

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
    const { id } = this.props.match.params;
    this.props.singleBusiness(id);
  }

  componentWillMount() {
    const businessId = this.props.match.params.id;
    this.props.fetchReview(businessId);
  }

  addReview = e => {

    console.log("listennnn");
    e.preventDefault(); // Prevent link from opening the URL(synthetic event):
    let businessCredential = {
      description: e.target.elements.description.value
    };
    const businessId = this.props.match.params.id;
    this.props.reviewBusiness(businessId, jsonStringify(businessCredential));
    window.location.reload();
  };

  render() {
    const reviews = Object.values({ ...this.props.fetchReview });

    if (reviews) {
      Array.prototype.reverse.call(reviews);
    }

    console.log("reviews", this.props.reviews);
    return (
      <AddReview
        reviews={this.props.reviews}
        addReview={this.addReview}
        username={this.props.username}
        businessName={this.props.businessName}
      />
    );
  }
}
Reviews.protoTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  businessReviews: PropTypes.array.isRequired,
  fetchReview: PropTypes.func.isRequired,
  businessName: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    username: state.auth.loginData.username,
    email: state.auth.loginData.email,
    businessReviews: state.business.fetchReviewMessage,
    reviews: state.business.fetchReviewMessage.review_data,
    businessName: state.business.singleBusinessMessage.business_data,
  };
};

const mapDispatchToProps = dispatch => ({
  singleBusiness: id => dispatch(singleBusiness(id)),
  fetchReview: id => dispatch(fetchReview(id)),
  reviewBusiness: (id, data) => dispatch(reviewBusiness(id, data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Reviews)
);
