import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const EditBusiness = ({
  name,
  category,
  location,
  description,
  handleChange,
  updateBusiness
}) => (
  <div>
    <NavBar />

    <div className="container">
      <h3> You can now update your Business</h3>
    </div>
    <hr />
    <div style={{ margin: "100px" }}>
      <form onSubmit={updateBusiness}>
        <div className="form-group">
          <label className="control-label requiredField" for="title">
            Business Name:
          </label>
          <input
            className="form-control"
            id="title"
            name="name"
            type="text"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label " for="category">
            Business Category:
          </label>
          <input
            className="form-control"
            id="category"
            name="category"
            type="text"
            defaultValue={category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label " for="location">
            Business Location:
          </label>
          <input
            className="form-control"
            id="location"
            name="location"
            type="text"
            defaultValue={location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label " for="description">
            Business Description:
          </label>
          <textarea
            className="form-control"
            cols="40"
            id="description"
            name="description"
            rows="10"
            onChange={handleChange}
          >
            {description}
          </textarea>
        </div>

        <div className="form-group">
          <button className="btn btn-primary " name="submit" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>

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

export default EditBusiness;
