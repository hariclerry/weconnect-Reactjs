import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/stylesform.css'
// import {checkIfUserIsLoggedIn} from '../actions/userActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from 'react-notifications';
import './static/css/bootstrap.min.css'
import { reviewBusiness} from '../actions/businessActions';
import {checkIfUserIsLoggedIn} from '../actions/userActions';
import Footer from './Footer';
import NavBar from './NavBar';



class ReviewBusiness extends React.Component {

    componentWillReceiveProps(recieved) {
        if (recieved && recieved.review.message === "Business successfully registered") {
            this.props.history.push('/dashboard');
        }
        else{
            if(recieved && recieved.review.status === "failure"){
                NotificationManager.error(recieved.review.message, "", 5000);
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

    addReview = e => {
        e.preventDefault(); // Prevent link from opening the URL(synthetic event):
        let businessCredential = {
            description: e.target.elements.description.value
        };
        const businessId = this.props.match.params.id
        console.log(this.props.match);
        this.props.reviewBusiness(businessId, this.jsonStringify(businessCredential))
        // this.props.reviewBusiness(businessId)


    }

    render () {
        return (
    <div>
    
             <NavBar />
              <div className="container">
                  
              <div style= {{ margin: "3%" }}>
                    <h3 className="text-center">Below is a list of reviews on this particular business</h3>
                </div>
        
                <hr/>
                          
                            
                              <p>
                             <b>Harriet:</b>

                            <p>Awesome services, good customer care, great feedback.</p>
                   
                              </p>
                              <p>
                                    <b>Bob:</b>
       
                                   <p>Excellent services, good customer care, definitely recommends to someone.</p>
                          
                                     </p>
                
                </div>
                
        
                      <div style={{margin: "100px"}}>
                            <form   onSubmit={this.addReview } >
                                    <div className="form-group">
                                            <label className="control-label " for="description">Say Something about this Business:</label>
                                            <textarea className="form-control" cols="5" id="description" name="description" rows="5"></textarea>
                                          </div>
                  
                                
                                <div className="form-group">
                                    <button className="btn btn-primary " name="submit" type="submit">Add Review</button>
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

ReviewBusiness.protoTypes = {
    email: PropTypes.string.isRequired,
    reviewBusiness: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    email: state.auth.loginData.email,
    review: state.business.reviewBusinessMessage

});

export default  withRouter(connect(mapStateToProps,{reviewBusiness })(ReviewBusiness));