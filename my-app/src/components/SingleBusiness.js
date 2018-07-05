import React from "react";
import { Link } from "react-router-dom";
// import Loader from 'react-loader';
import NavBar from "./NavBar";
import Footer from "./Footer";

import "./static/css/bootstrap.min.css";

const SingleBusiness = ({ business, loaded, deleteBusiness }) => (
  <div>
    <NavBar />
    <div className="container">
      <h4>Hello User</h4>
      <hr />

      <div className="col-md-8 col-md-offset-2">
        <h1>{business.name}</h1>
        <p>
          <b>Category: </b> {business.category}
        </p>
        <p>
          <b>Location: </b>
          {business.location}
        </p>
        <p>
          <b>Description: </b>
          {business.description}
        </p>

        <Link
          to={`/addreview/${business.id}`}
          className="btn btn-success"
          role="button"
          style={{ marginRight: "20px" }}
        >
          Review
        </Link>
        <Link
          to={`/editbusiness/${business.id}`}
          className="btn btn-info"
          role="button"
          style={{ marginRight: "20px" }}
        >
          Edit
        </Link>
        <button
          onClick={() => deleteBusiness(business.id)}
          className="btn btn-danger"
          role="button"
          style={{ margin: "1%" }}
        >
          {" "}
          Delete{" "}
        </button>
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

export default SingleBusiness;
