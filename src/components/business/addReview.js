import React from "react";

import Notifications from "react-notify-toast";

import Footer from "components/common/footer";
import NavBar from "components/common/navBar";
import "static/css/bootstrap.min.css";
import "static/css/box-model.css";
import "static/css/fix-footer.css";

export const ReviewBusiness = ({ reviews, addReview, businessName }) => (
  <div>

     <Notifications />
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

    <div style={{margin: "50px 150px" }}>
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
            required
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary " name="submit" type="submit">
            Add Review
          </button>
        </div>
      </form>
    </div>


       <div style={{ width: "auto", margin: "50px 150px"}}>
        <h3>Reviews</h3>
        { !reviews ? <div> No Reviews found </div>
        : 
        reviews.map((review, index) => (
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
