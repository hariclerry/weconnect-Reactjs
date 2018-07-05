import React from "react";
import "./static/css/bootstrap.min.css";
import "./static/css/stylesform.css";
import "./static/css/fix-footer.css";

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from "react-notifications";
import Footer from "./Footer";
import NavBar from "./NavBar";

const ReviewBusiness = ({ reviews, addReview, username }) => (
  <div>
    <NavBar />
    <div className="container">
      <div style={{ margin: "3%" }}>
        <h3 className="text-center">
          Below is a list of reviews on this particular business
        </h3>
      </div>

      <hr />
    </div>

    <div style={{ margin: "100px" }}>
      <form onSubmit={addReview}>
        <div className="form-group">
          <label className="control-label " htmlFor="description">
            Say Something about this Business:
          </label>
          <textarea
            className="form-control"
            cols="2"
            id="description"
            name="description"
            rows="5"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary " name="submit" type="submit">
            Add Review
          </button>
        </div>
      </form>
    </div>
    <div className="fixed-footer">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>
                <b>Description</b>
              </td>
              <td>
                <b>says:</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {console.log(reviews, "reviewszzzzzcc")}
            {reviews.map((review, index) => (
                    <tr key={review.id}>
                    <td>
                        {username}
                </td>
                      <td>{review.review}</td>
                    </tr>
                  ))
                }
          </tbody>
        </table>
      </div>
    </div>

    <Footer />
  </div>
);

export default ReviewBusiness;
