import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from 'react-notifications';
import './static/css/bootstrap.min.css'
import { registerBusiness} from '../actions/businessActions';
import Footer from './Footer';


class RegisterBusiness extends React.Component {

    componentWillReceiveProps(recieved) {
        if (recieved && recieved.business.message === "Business successfully registered") {
            this.props.history.push('/dashboard');
        }
        else{
            if(recieved && recieved.business.status === "failure"){
                NotificationManager.error(recieved.business.message, "", 5000);
            }
        }
};

	jsonStringify = object =>{
        let simpleObj={};
            for (let prop in object){
                    if (!object.hasOwnProperty(prop)){
                            continue;
                        }
                    if (typeof(object[prop]) === 'object'){
                            continue;
                        }
                    simpleObj[prop] = object[prop];
                }
                return JSON.stringify(simpleObj)}

    createBusiness = e => {
        e.preventDefault(); // prevent the default link behavior of opening a new page
        let businessCredential = {
            name: e.target.elements.name.value,
            category: e.target.elements.category.value,
            location: e.target.elements.location.value,
            description: e.target.elements.description.value
        };
        this.props.registerBusiness(this.jsonStringify(businessCredential))

    }
    render () {
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
                               <h3> You can now Register your Business</h3>
                        </div>
                        <hr/>
                        <div style={{margin: "100px"}}>
                        <form onSubmit={this.createBusiness }>
                          
                            <div className="form-group"> 
                              <label className="control-label requiredField" htmlFor="title">Business Name:</label>
                              <input className="form-control"  name="name" id="title" type="text"/>
                            </div>

                            <div className="form-group">
                                    <label className="control-label " htmlFor="category">Business Category:</label>
                                    <input className="form-control"  id="category" name="category" type="text"/>
                            </div>
                            
                            <div className="form-group">
                              <label className="control-label " htmlFor="location">Business Location:</label>
                              <input className="form-control"  id="location" name="location" type="text"/>
                            </div>
                            
                            
                            <div className="form-group"> 
                              <label className="control-label " htmlFor="description">Business Description:</label>
                              <textarea className="form-control" cols="40" id="description" name="description" rows="10"></textarea>
                            </div>
                            
                            <div className="form-group">
                              <button className="btn btn-primary " name="submit" type="submit">Create</button>
                            </div>
                            
                          </form>	
                          </div>						
                                      
                       
                        
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


RegisterBusiness.protoTypes = {
    registerBusiness: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    business: state.business.createBusinessMessage

});

export default  withRouter(connect(mapStateToProps,{ registerBusiness })(RegisterBusiness));