import React from "react";

import BusinessLists from "components/business/results";
import SearchBusiness from "components/business/searchBar";
import NavBar from "components/common/navBar";
import Footer from "components/common/footer";
import TableSet from "../common/tableSet";
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
            <TableSet />
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
