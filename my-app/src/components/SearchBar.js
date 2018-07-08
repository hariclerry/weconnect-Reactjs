import React from "react";

import "../static/css/bootstrap.min.css";

const SearchBusiness = () => (
  <div>
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
              <button className="btn btn-info" type="submit" id="search">
                <i className="fa fa-search fa-fw" /> Search
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SearchBusiness;
