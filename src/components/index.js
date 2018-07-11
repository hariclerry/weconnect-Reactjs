import React from "react";

import { Route, withRouter } from "react-router-dom";

import Index from "components/common/indexPage";
import Signup from "containers/user/signup";
import Login from "containers/user/login";
import Dashboard from "containers/business/dashboard";
import RegisterBusiness from "containers/business/registerBusiness";
import BusinessList from "containers/business/businessList";
import Business from "containers/business/singleBusiness";
import EditBusinessContainer from "containers/business/editBusiness";
import Reviews from "containers/business/reviews";
import ResetPassword from "containers/user/resetPassword";


class Routes extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/index" exact component={Index} />
          <Route path="/signup" component={Signup} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/registerbusiness" component={RegisterBusiness} />
          <Route path="/businesslist" component={BusinessList} />
          <Route path="/singlebusiness/:id" component={Business} />
          <Route path="/editbusiness/:id" component={EditBusinessContainer} />
          <Route path="/addreview/:id" component={Reviews} />
        </div>
      </div>
    );
  }
}
export default withRouter(Routes); // maps routes and returns to browser router
