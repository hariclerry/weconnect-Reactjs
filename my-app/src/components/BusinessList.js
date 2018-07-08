import React from "react";
import { Link } from "react-router-dom";

// import { NotificationManager } from "react-notifications";
import SearchBusiness from "../components/searchBar";
import NavBar from "./navBar";
import Footer from "./footer";
import "../static/css/bootstrap.min.css";

const Businesses = ({ businesses }) => (
 
      <div>
        
        <NavBar />

        <div style={{ float: "right", width: "50%" }}>
              <SearchBusiness />
              </div>

        <div className="container">
          <div style={{ margin: "100px"}}>
            <div>
              <h4>Below are a list of all Registered businesses</h4>
            </div>
            </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <td><b>Name</b></td>
                <td><b>Category</b></td>
                <td><b>Location</b></td>
                <td><b>Description</b>
                </td>
                <td><b>Review</b>
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
                          style={{ marginRight: "20px" }}>
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
