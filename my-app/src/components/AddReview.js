import React from "react";

// import { NotificationManager } from "react-notifications";
import Footer from "./footer";
import NavBar from "./navBar";

import "./static/css/bootstrap.min.css";
import "./static/css/box-model.css";
import "./static/css/fix-footer.css";

const ReviewBusiness = ({ reviews, addReview, businessName }) => (
  <div>
    <NavBar />
    <div className="container">
      <div style={{ margin: "20px" }}>
      <div className="col-md-8 col-md-offset-2" className="box">
        <h1 >{businessName.name}</h1>
        <p>
          <b>Category: </b> {businessName.category}
        </p>
        <p>
          <b>Location: </b>
          {businessName.location}
        </p>
        <p>
          <b>Description: </b>
          {businessName.description}
        </p>

      </div>
      </div>

      <hr />
    </div>

    <div style={{ marginLeft: "130px",  marginRight: "130px" }}>
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
            rows="2"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary " name="submit" type="submit">
            Add Review
          </button>
        </div>
      </form>
    </div>


       <div style={{ width: "auto", margin: "10%"}}>
        <h3>Reviews</h3>
        {reviews.map((review, index) => (
        <p key={review.id}>
                
          <div style={{ width: "auto", padding: "10px", border: "0 solid gray", margin: "0", backgroundColor: "#e6e6e6"}}>             
          <ul className="list-group">
        <h4 style={{color: "green"}}>{review.username}:</h4>
        {review.description}
        </ul>
        </div>
        </p>
                  ))
                }
      
      </div>


    <Footer />
  </div>
);

export default ReviewBusiness;
