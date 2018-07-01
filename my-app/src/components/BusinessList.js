import React from 'react';
import './static/css/bootstrap.min.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { NotificationManager } from 'react-notifications';
import './static/css/bootstrap.min.css'
import { fetchBusinesses } from '../actions/businessActions';


class BusinessList extends React.Component {

    componentWillReceiveProps(recieved) {
        console.log(recieved)
        if(recieved.business){
        if (recieved.business.message === "Business successfully registered") {
            this.props.history.push('/businesslist');
        }
        else{
            if(recieved && recieved.business.status === "failure"){
                NotificationManager.error(recieved.business.message, "", 5000);
            }
        }}
};

componentDidMount() {
    this.props.fetchBusinesses();
  }

    render () {
        console.log(this.props.business.business_data)
        
        // returns all businesses from props int a dict
        const businesses = Object.values({...this.props.business.business_data});

         // sorts/arrange business from recently added to previous
        if (businesses){
            Array.prototype.reverse.call(businesses)
      }
        // const business = this.props.business.business_data;
        return (
    <div>
     <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">WeConnect</a>
      </div>
     
      
        <ul className="nav navbar-nav navbar-right">
            <li><a href=""><span className="glyphicon glyphicon-user"></span>User</a></li>
            <li><a href="index.html"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
              </ul>
       <ul className="nav navbar-nav">
       <li><a href="/">Home</a></li>
            <li>
                <a href="/dashboard">Dasboard</a>
            </li>
            <li>
                <a href="/registerbusiness">Register Business</a>
            </li>
            <li>
                <a href="/businesslist">All Businesses</a>
            </li>
            <li>
                <a href="/singlebusiness">Single Business</a>
            </li>
        </ul>
  </div>
  </nav>
    
            <div className="container">
            <div style={{ width: "100%"}}>
                <div style={{float: "left", width: "60%"}}>
            <h4>Hello User, Below are a list of all Registered businesses</h4>
            </div>
            <div style={{float: "right", width: "40%"}}>
            <form  action="" method="POST">
                                <div>
                                  <div className="col-md-8 col-md-offset-2 businesssearch">
                                    <div className="input-group">
                                           <input type="text" className="form-control" placeholder="Search business" name="search"/>
                                             <span className="input-group-btn">
                                               <button className="btn btn-info" type="submit" id="search"><i className="fa fa-search fa-fw"></i> Search</button>
                                             </span>
                                   </div>
                                  </div>
                                </div>
            </form>
            </div>
            </div>
            <br/>
    <br/>
    <br/>
    <br/>
            <hr/>
            <br/>
    <br/>
    <br/>
    <br/>

              <div className="table-responsive">
              <table className="table table-striped">
                          <thead> 
                                  <td><b>Name</b></td>
                                  <td><b>Category</b></td>
                                  <td><b>Location</b></td>
                                  <td><b>Description</b></td>
                                  <td><b>Review</b></td>
                                  
                          </thead>
                          <tbody >
                             
                          {this.props.loading? <tr><td colSpan={6}><div className="text-center  alert alert-info"><span>Loading businesses</span></div></td></tr> :
										businesses.map((business, index) =>
                            				 <tr key={business.id}>
                                             <td>{business.name}</td>
					                         <td>{business.category}</td>
					                          <td>{business.location}</td>
                                              <td>{business.description}</td>
                                              <td>
                                  
                                                  <a href="/addreview" className="btn btn-info" role="button">Review</a>
                                               </td>
											
											</tr>
											)
										}
                              
                              
                             
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
    <footer className="row">
           
            <div className="panel-footer text-center bg-dark">
        <p>  &copy; Copyright 2018 <i>powered by</i>  <b> InfoClan</b> </p>
            </div>
     </footer>
     </div>

        )
    }
}


BusinessList.protoTypes = {
    fetchBusinesses: PropTypes.func.isRequired,
    businesses: PropTypes.object
}

const mapStateToProps = state =>({
    business: state.business.fetchBusinessMessage

});

export default  withRouter(connect(mapStateToProps,{ fetchBusinesses })(BusinessList));