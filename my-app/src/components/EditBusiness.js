import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from 'react-notifications';
import './static/css/bootstrap.min.css'
import { editBusiness} from '../actions/businessActions';
import {checkIfUserIsLoggedIn} from '../actions/userActions';
import './static/css/bootstrap.min.css'
import NavBar from './NavBar';
import Footer from './Footer';
// TO DO: import {checkIfUserIsLoggedIn} from '../actions/userActions';


class EditBusiness extends React.Component {

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


componenWillMount() {
    checkIfUserIsLoggedIn(this.props.email,this.props.history);

}

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

updateBusiness = e => {
    e.preventDefault(); // Prevent link from opening the URL(synthetic event):
    let businessCredential = {
        name: e.target.elements.name.value,
        category: e.target.elements.category.value,
        location: e.target.elements.location.value,
        description: e.target.elements.description.value
    };
  
    // this.props.editBusiness(this.jsonStringify(businessCredential))

}
    render () {
        console.log(this.props.business)
        console.log(this.props.email)
        return (
    <div>
            <NavBar />
    
             
                  

                        <div className="container">
                               <h3> You can now update your Business</h3>
                        </div>
                        <hr/>
                        <div style={{margin: "100px"}}>
                        <form onSubmit={this.updateBusiness }>
                          
                            <div className="form-group"> 
                              <label className="control-label requiredField" for="title">Business Name:</label>
                              <input className="form-control" id="title" name="title" type="text"/>
                            </div>

                            <div className="form-group">
                                    <label className="control-label " for="category">Business Category:</label>
                                    <input className="form-control" id="category" name="category" type="text"/>
                            </div>
                            
                            <div className="form-group">
                              <label className="control-label " for="location">Business Location:</label>
                              <input className="form-control" id="location" name="location" type="text"/>
                            </div>
                            
                            
                            <div className="form-group"> 
                              <label className="control-label " for="description">Business Description:</label>
                              <textarea className="form-control" cols="40" id="description" name="description" rows="10"></textarea>
                            </div>
                            
                            <div className="form-group">
                              <button className="btn btn-primary " name="submit" type="submit">Update</button>
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

EditBusiness.protoTypes = {
  email: PropTypes.string.isRequired,
  editBusiness: PropTypes.func.isRequired
}

const mapStateToProps = state =>{
console.log(state);
return {
  email: state.auth.loginData.email,
  business: state.business.singleBusinessMessage.business_data,

}};

export default  withRouter(connect(mapStateToProps,{editBusiness })(EditBusiness));