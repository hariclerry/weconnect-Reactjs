import React from "react";

import { Route, withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import Index from "./indexPage";
import Signup from "../containers/signup";
import Login from "../containers/login";
import Dashboard from "../containers/dashboard";
import RegisterBusiness from "../containers/registerBusiness";
import BusinessList from "../containers/businessList";
import Business from "../containers/singleBusiness";
import EditBusinessContainer from "../containers/editBusiness";
import Reviews from "../containers/reviews";


class Routes extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/index" exact component={Index} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/registerbusiness" component={RegisterBusiness} />
          <Route path="/businesslist" component={BusinessList} />
          <Route path="/singlebusiness/:id" component={Business} />
          <Route path="/editbusiness/:id" component={EditBusinessContainer} />
          <Route path="/addreview/:id" component={Reviews} />
        </div>
          <NotificationContainer />
      </div>
    );
  }
}
export default withRouter(Routes); // maps routes and returns to browser router
