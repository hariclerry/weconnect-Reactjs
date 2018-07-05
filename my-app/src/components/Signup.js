import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from 'react-notifications';

import './static/css/bootstrap.min.css';
import './static/css/jumbotron.css';
import './static/css/styles.css';
import { registerUser} from '../actions/userActions';
import AuthNavbar from "./AuthNavbar";

import Footer from './Footer';



class Signup extends React.Component {
    componentWillReceiveProps(recieved) {
        if (recieved && recieved.user.message === "Registration successful. Please login.") {
            // this.props.history.push('/login');
        }
        else{
            if(recieved && recieved.user.status === "failure"){
                NotificationManager.error(recieved.user.message, "", 5000);
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

    signUp = e => {
        e.preventDefault(); //o prevent the default link behavior of opening a new page
        let userCredential = {
            username: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        };
        this.props.registerUser(this.jsonStringify(userCredential))

    }
    render () {
        return (
            <div>
                <AuthNavbar />

              <div className="container">
                <h3> Please fill in the registration form below to sign in</h3>
         </div>
         <hr/>
         <div className="container" id="registration-form">
               <div className="image"></div>
               <div className="frm">
                   <h1>Sign up</h1>
                   <form onSubmit={this.signUp}>
                       <div className="form-group">
                           <label htmlFor="username">Username:</label>
                           <input 
                                type="text" 
                                className="form-control"  
                                name="name" 
                                id="username" 
                                placeholder="Enter username"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email">Email:</label>
                           <input 
                                type="email" 
                                className="form-control"  
                                name="email"
                                id="email" 
                                placeholder="Enter email"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="pwd">Password:</label>
                           <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                id="pwd" 
                                placeholder="Enter password"
                                />
                       </div>
                       <div className="form-group" className="fixed">
                           <button type="submit" className="btn btn-success btn-lg">Submit</button>
                       </div>
                   </form>
               </div>
           </div>
       
            


    <br/>
    <br/>
    <br/>
    <br/>
    <Footer />
            </div>

        )
    }
}

Signup.protoTypes = {
    registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    user: state.auth.signupMessage
});

export default  withRouter(connect(mapStateToProps ,{ registerUser })(Signup));
