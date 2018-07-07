import React from "react";
import "./static/css/fix-footer.css";

const Footer = () => (
  <div>
    <div className="footer">
      <footer className="container-fluid text-center" data-offset-bottom="10">
        <div className="panel-footer text-center bg-dark">
          <p>
            {" "}
            &copy; Copyright 2018 <i>powered by</i> <b> InfoClan</b>{" "}
          </p>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
