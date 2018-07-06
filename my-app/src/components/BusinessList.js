import React from "react";
import "./static/css/bootstrap.min.css";

// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { NotificationManager } from "react-notifications";
import "./static/css/bootstrap.min.css";
// import { fetchBusinesses } from "../actions/businessActions";
// import { checkIfUserIsLoggedIn } from "../actions/userActions";
import SearchBusiness from "../components/SearchBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Businesses = ({ businesses }) => (
 
      <div>
        <NavBar />

        <div style={{ float: "right", width: "50%" }}>
              <SearchBusiness />
              </div>

        <div className="container">
          <div style={{ margin: "100px"}}>
            <div>
              <h4>Hello User, Below are a list of all Registered businesses</h4>
            </div>
            </div>
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
                {this.loading ? (
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
       
        <Footer />
      </div>
);

export default Businesses;
