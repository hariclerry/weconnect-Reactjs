import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./navBar";
import Footer from "./footer";

import "../static/css/bootstrap.min.css";
import "../static/css/fix-footer.css";
// TO DO: import { NotificationManager } from "react-notifications";

const Dashboard = ({ businesses, username }) => (
  
      <div>
        <NavBar />
        <div className="container">
          <h4>
            Hello {username}, welcome to your dashboard
          </h4>
          <hr />
          <br />
          <div className="fixed-footer">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <td><b>Name</b></td>
                  <td><b>Category</b></td>
                  <td><b>Location</b></td>
                  <td><b>Description</b></td>
                  <td><b>Review</b></td>
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
                        <td>
                          <Link
                            to={`/singlebusiness/${business.id}`}
                            style={{ textDecoration: "None" }}
                          >
                            {" "}
                            {business["name"]}
                          </Link>
                        </td>
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
        </div>

        <Footer />
      </div>
   );

  export default Dashboard;