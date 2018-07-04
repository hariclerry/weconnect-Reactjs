import React from 'react';
import './static/css/bootstrap.min.css'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from 'react-loader';
// import { NavLink } from 'react-router-dom';

// TO DO:import { NotificationManager } from "react-notifications";
import { singleBusiness, deleteBusiness } from "../actions/businessActions";
import {checkIfUserIsLoggedIn} from '../actions/userActions';
import NavBar from "./NavBar";
import Footer from './Footer';


class SingleBusiness extends React.Component {

       state = {
         loaded: false
       }
      componentWillMount() {
        
        checkIfUserIsLoggedIn(this.props.email,this.props.history);
        const { id } = this.props.match.params;
        console.log(id);
        this.props.singleBusiness(id).then(()=>{});
        this.setState({loaded: true})
      }

      deleteBusiness = id  =>{
        if (window.confirm('Are you sure you want to delete this business?')) {
                this.props.deleteBusiness(id).then(()=>{
                  console.log(" confirmed deleted........")
                });
               this.props.history.push("/dashboard");
        }
    }
    render () {
        // Deconstructing an object
        const{business} = this.props;
        const {loaded} = this.state;

        return (
    <div>
    <NavBar />
            <div className="container">
            <h4>Hello User</h4>
            <hr/>

        <div className="col-md-8 col-md-offset-2">
        <Loader loaded={loaded}>
        <h1>{business.name}</h1>
        <p><b>Category:   </b> {business.category}</p>
        <p><b>Location:   </b>{business.location}</p>
        <p><b>Description:  </b>{business.description}</p>

        <a href="/addreview" className="btn btn-info" role="button" style={{margin: "2%"}}>Review</a>
        <a href="/edit" className="btn btn-info" role="button" color="green" style={{margin: "2%"}}>Edit</a>
        <button onClick={() => this.deleteBusiness(business.id) } className="btn btn-default"  role="button" style={{margin: "2%"}}> Delete </button>
        </Loader>
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
SingleBusiness.protoTypes = {
    email: PropTypes.string.isRequired,
    singleBusiness: PropTypes.func.isRequired,
    deleteBusiness: PropTypes.func.isRequired
  };

function mapStateToProps(state, ownProps){
  console.log(state.business.singleBusinessMessage.business_data);
   return {
    email: state.auth.loginData.email,
    business: state.business.singleBusinessMessage.business_data,
    businessId: ownProps.match.params.id,
    deletedBusiness: state.business.deleteBusinessMessage,

   }

  };

  // const mapDispatchToProps = dispatch => ({

  //     loadBusiness: (businessId) => dispatch(singleBusiness(businessId))
  // });

  export default withRouter(connect(mapStateToProps, {singleBusiness, deleteBusiness})(SingleBusiness));