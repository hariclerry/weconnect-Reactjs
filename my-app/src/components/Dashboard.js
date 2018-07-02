import React from 'react';
import './static/css/bootstrap.min.css'
import NavBar   from './NavBar';
import Footer from './Footer';
import {connect} from 'react-redux';
import PropTypes from  'prop-types';
import { NavLink } from "react-router-dom";
import {checkIfUserIsLoggedIn} from '../actions/userActions';
import { userBusinesses } from '../actions/businessActions';
// import { NotificationManager } from "react-notifications";



class Dashboard extends React.Component {

    // componentWillReceiveProps(recieved) {
    //     if (recieved.business) {
    //       if (recieved.business.message === "Business successfully registered") {
    //         this.props.history.push("/businesslist");
    //       } else {
    //         if (recieved && recieved.business.status === "failure") {
    //           NotificationManager.error(recieved.business.message, "", 5000);
    //         }
    //       }
    //     }
    //   }

    componentWillMount(){
       checkIfUserIsLoggedIn(this.props.email,this.props.history);
    }

   
    
      componentDidMount() {
          console.log(localStorage.getItem("user_id"))
        this.props.userBusinesses(localStorage.getItem("user_id"));
      }
    
        
    render () {

        console.log(this.props.business.business_data);
    
        // returns all businesses from props int a dict
        const businesses = Object.values({ ...this.props.business.business_data });
        // console.log("businesses:", this.props.business);
    
        // sorts/arrange business from recently added to previous
        if (businesses) {
          Array.prototype.reverse.call(businesses);
        }
        // const business = this.props.business.business_data;
        return (
            <div>
               <NavBar />
            <div className="container">
            <h4>Hello User, welcome to your dashboard, Below are a list of your Registered businesses</h4>
             <hr/>
              <br/>
              <br/>
              <br/>
              <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <td>
                  <b>Name</b>
                </td>
                <td>
                  <b>Category</b>
                </td>
                <td>
                  <b>Location</b>
                </td>
                <td>
                  <b>Description</b>
                </td>
                <td>
                  <b>Review</b>
                </td>
              </thead>
              <tbody>
                {this.props.loading ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="text-center  alert alert-info">
                        <span>Loading businesses</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  businesses.map((business, index) => (
                    <tr key={business.id}>
                      <td>
                        <NavLink
                          to={`/singlebusiness/${business.id}`}
                          style={{ textDecoration: "None" }}
                        >
                          {" "}
                          {business["name"]}
                        </NavLink>
                    </td>
                      <td>{business.category}</td>
                      <td>{business.location}</td>
                      <td>{business.description}</td>
                      <td>
                        <a
                          href="/addreview"
                          className="btn btn-info"
                          role="button"
                        >
                          Review
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
                  </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer />
            </div>

        )
    }
}

// Validate props

Dashboard.propTypes = {
    email: PropTypes.string.isRequired,
    userBusinesses: PropTypes.func.isRequired
//  businesses: PropTypes.object
};

const mapStateToProps = state => ({
    email: state.auth.loginData.email,
    business: state.business.userBusinessMessage
});

export default connect(mapStateToProps, {checkIfUserIsLoggedIn, userBusinesses})(Dashboard);