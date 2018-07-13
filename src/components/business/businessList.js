import React from "react";
import { Link } from "react-router-dom";

import BusinessLists from "components/business/displayBusinessList";
import SearchBusiness from "components/business/searchBar";
import NavBar from "components/common/navBar";
import Footer from "components/common/footer";
import "static/css/bootstrap.min.css";

const Businesses = ({businesses, searching, searchedBusinesses,
  searchBusinesses
  }) => {
  let searchedBusinessesList;
  if (searchedBusinesses == null) {
    searchedBusinessesList = [];
  } else {
    searchedBusinessesList = searchedBusinesses;
  }
  return (
    <div>
      <NavBar />

      <div style={{ float: "right", width: "50%" }}>
        <SearchBusiness searchBusinesses={searchBusinesses} />
      </div>

      <div className="container">
        <div style={{ margin: "100px" }}>
          <div>
            <h4>Below are a list of all Registered businesses</h4>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
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
              </tr>
            </thead>
            <tbody>
              {searching
                ? searchedBusinessesList.map((business, index) => (
                   <BusinessLists business={business}/> 
                  ))
                : businesses.map((business, index) => (
                  <BusinessLists business={business}/> 
                    
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Businesses;
