import React from "react";

import Notifications from "react-notify-toast";

import Footer from "components/common/footer";
import NavBar from "components/common/navBar";
import "static/css/bootstrap.min.css";

const RegisterBusiness = ({ createBusiness }) => (
  <div>
    <Notifications />
    <NavBar />

    <div className="container">
      <h3> You can now Register your Business</h3>
    </div>
    <hr />
    <div style={{ margin: "100px" }}>
      <form onSubmit={createBusiness}>
        <div className="form-group">
          <label className="control-label requiredField" htmlFor="title">
            Business Name:
          </label>
          <input
            className="form-control"
            name="name"
            id="title"
            type="text"
            required
          />
        </div>

        <div className="form-group">
          <label className="control-label " htmlFor="category">
            Business Category:
          </label>
          <input
            className="form-control"
            id="category"
            name="category"
            type="text"
            required
          />
        </div>

        <div className="form-group">
          <label className="control-label " htmlFor="location">
            Business Location:
          </label>
          <input
            className="form-control"
            id="location"
            name="location"
            type="text"
            required
          />
        </div>

        <div className="form-group">
          <label className="control-label " htmlFor="description">
            Business Description:
          </label>
          <textarea
            className="form-control"
            cols="40"
            id="description"
            name="description"
            rows="10"
            required
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary " name="submit" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default RegisterBusiness;
