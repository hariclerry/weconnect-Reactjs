import React from "react";
import { Route, withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import Index from "./IndexPage";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import RegisterBusiness from "./RegisterBusiness";
import BusinessList from "./BusinessList";
import Business from "../containers/SingleBusiness";
import EditBusinessContainer from "../containers/EditBusiness";
import Reviews from "../containers/Reviews";
// import ReviewBusiness from './AddReview';

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
        <div>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}
export default withRouter(Routes); // maps routes and returns to browser router
