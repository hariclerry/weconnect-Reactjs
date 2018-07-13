import React from "react";

import AuthNavbar from "components/common/authNavbar";
import Footer from "components/common/footer";

import "static/css/bootstrap.min.css";
import "static/css/jumbotron.css";

const IndexPage = () => (
  <div>
    <AuthNavbar />

    <div className="jumbotron">
      <div className="container">
        <h1>We Connect </h1>
      </div>
    </div>

    <br />
    <div className="container">
      <h3>
        {" "}
        Welcome to We Connect! Connect with millions of Businesses World wide
      </h3>
      <a href="/signup" className="btn btn-start" role="button">
        <h4>Get Started</h4>
      </a>
    </div>
    <hr />

    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={require("static/images/reg.jpeg")} alt="image1" />

            <div className="caption">
              <h3>Register Business</h3>
              <p>
                Lorem ipsum donec id elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={require("static/images/innovation.jpeg")} alt="image2" />
            <div className="caption">
              <h3>Give Review</h3>
              <p>
                Lorem ipsum donec id elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={require("static/images/business.jpeg")} alt="image3" />

            <div className="caption">
              <h3>Connect</h3>
              <p>
                Lorem ipsum donec id elit non mi porta gravida at eget metus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default IndexPage;
