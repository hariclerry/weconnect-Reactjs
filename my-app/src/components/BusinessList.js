import React from "react";
import "./static/css/bootstrap.min.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { NotificationManager } from "react-notifications";
import "./static/css/bootstrap.min.css";
import { fetchBusinesses } from "../actions/businessActions";
import { checkIfUserIsLoggedIn } from "../actions/userActions";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
    this.props.fetchBusinesses();
  }

  render() {
    console.log(this.props.business.business_data);

    // returns all businesses from props int a dict
    const businesses = Object.values({ ...this.props.business.business_data });
    console.log("businesses:", this.props.business);

    // sorts/arrange business from recently added to previous
    if (businesses) {
      Array.prototype.reverse.call(businesses);
    }
    // const business = this.props.business.business_data;
    return (
      <div>
        <NavBar />

        <div className="container">
          <div style={{ width: "100%" }}>
            <div style={{ float: "left", width: "60%" }}>
              <h4>Hello User, Below are a list of all Registered businesses</h4>
            </div>
            <div style={{ float: "right", width: "40%" }}>
              <form action="" method="POST">
                <div>
                  <div className="col-md-8 col-md-offset-2 businesssearch">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search business"
                        name="search"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-info"
                          type="submit"
                          id="search"
                        >
                          <i className="fa fa-search fa-fw" /> Search
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <br />

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <td>
                  <b>Name</b>
                </td>
                <td>
                  <b>Category</b>
                </td>
                <td>
                  <b>Location</b>
                </td>
                <td>
                  <b>Description</b>
                </td>
                <td>
                  <b>Review</b>
                </td>
              </thead>
              <tbody>
                {this.props.loading ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="text-center  alert alert-info">
                        <span>Loading businesses</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  businesses.map((business, index) => (
                    <tr key={business.id}>
                      <td>{business.name}</td>
                      <td>{business.category}</td>
                      <td>{business.location}</td>
                      <td>{business.description}</td>
                      <td>
                        <Link
                          to={`/addreview/${business.id}`}
                          className="btn btn-info"
                          role="button"
                          style={{ marginRight: "20px" }}
                        >
                          Review
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
