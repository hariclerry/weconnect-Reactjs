import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {notify} from "react-notify-toast";

import { jsonStringify } from "utils/jsonHelper";
import AddReview from "components/business/addReview";
import { singleBusiness, fetchReview, reviewBusiness } from "actions/businessActions";
import { checkIfUserIsLoggedIn } from "actions/userActions";

/**
 * Review Container Component for adding a review and view all the reviews.
 * 
 */

class Reviews extends React.Component {

  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);

    //  execute single business function and returns business information 
    const { id } = this.props.match.params;
    this.props.singleBusiness(id);

    //  execute fetch review function
    const businessId = this.props.match.params.id;
    this.props.fetchReview(businessId);
  }

  addReview = e => {
    // Prevent default submit event trigger(synthetic event):
    e.preventDefault(); 
    let reviewCredential = {
      description: e.target.elements.description.value
    };
    const businessId = this.props.match.params.id;
    this.props.reviewBusiness(businessId, jsonStringify(reviewCredential))
    .then(() => {
      notify.show("Reviews Successfully Added", "success");
    })
    
    window.location.reload();
  };

  render() {
    const reviews = Object.values({ ...this.props.fetchReview });

    if (reviews) {
      Array.prototype.reverse.call(reviews);
    }

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
Reviews.propTypes = {
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
