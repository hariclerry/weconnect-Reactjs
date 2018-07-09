import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchBusinesses, searchBusinesses } from "actions/businessActions";
import { checkIfUserIsLoggedIn } from "actions/userActions";
import Businesses from "components/business/businessList";
import Pagination from "components/business/pagination";


class BusinessList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      prevPage: null,
      nextPage: null,
      searching: false
    };
}
  // componentWillReceiveProps(recieved) {
  //   if (recieved.business) {
  //     if (recieved.business.message === "Business successfully registered") {
  //       this.props.history.push("/businesslist");
  //     } else {
  //       if (recieved && recieved.business.status === "failure") {
  //         NotificationManager.error(recieved.business.message, "", 5000);
  //       }
  //     }
  //   }
  // }

  componentDidMount() {
    checkIfUserIsLoggedIn(this.props.email, this.props.history);
     //  execute fetch business function
    this.props.fetchBusinesses();
  }

  search = (value) => {
    this.setState({ searching: true })
    this.props.searchBusinesses(value)
  }

  render() {
    const { 
      fetchBusinesses, 
      prevPage, 
      nextPage, 
    } = this.props;
  
    const searchedBusinesses = this.props.searchedBusinesses.business_data
    // returns all businesses from props int a dict
    const businesses = Object.values({ ...this.props.business.business_data });

    // sorts/arrange business from recently added to previous
    if (businesses) {
      Array.prototype.reverse.call(businesses);
    }
    return (
      <div>
        <Businesses
        businesses={businesses}
        searchedBusinesses={searchedBusinesses}
        searchBusinesses={this.search}
        searching={this.state.searching}
        />
        <Pagination
        paginate={fetchBusinesses}
        prevPage={prevPage}
        nextPage={nextPage}
        />
      </div>
  
    );
  }
}

BusinessList.protoTypes = {
  email: PropTypes.string.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
  businesses: PropTypes.object
};

const mapStateToProps = state => {
  return {
  email: state.auth.loginData.email,
  business: state.business.fetchBusinessMessage,
  nextPage: state.business.fetchBusinessMessage.next_page,
  prevPage: state.business.fetchBusinessMessage.prev_page,
  searchedBusinesses: state.business.searchBusinessMessage,
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchBusinesses, searchBusinesses }
  )(BusinessList)
);
