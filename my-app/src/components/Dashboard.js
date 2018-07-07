import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

import "./static/css/bootstrap.min.css";
import "./static/css/fix-footer.css";
// TO DO: import { NotificationManager } from "react-notifications";

const Dashboard = ({ businesses }) => (
  
      <div>
        <NavBar />
        <div className="container">
          <h4>
            Hello User, welcome to your dashboard, Below are a list of your
            Registered businesses
          </h4>
          <hr />
          <br />
          <br />
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
                          <a
                            href="/addreview"
                            className="btn btn-info"
                            role="button"
                          >
                            Review
                          </a>
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