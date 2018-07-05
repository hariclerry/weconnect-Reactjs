import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/stylesform.css'
// import {checkIfUserIsLoggedIn} from '../actions/userActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


// import 'react-notifications/lib/notifications.css';

import { NotificationManager } from 'react-notifications';
import './static/css/bootstrap.min.css'
import { reviewBusiness, fetchReview } from '../actions/businessActions';
import {checkIfUserIsLoggedIn} from '../actions/userActions';
import Footer from './Footer';
import NavBar from './NavBar';



class ReviewBusiness extends React.Component {

//     componentWillReceiveProps(recieved) {
//         if (recieved && recieved.review.message === "Business successfully registered") {
//             this.props.history.push('/addreview');
//         }
//         else{
//             if(recieved && recieved.review.status === "failure"){
//                 NotificationManager.error(recieved.review.message, "", 5000);
//             }
//         }
// };


    componentDidMount() {
        checkIfUserIsLoggedIn(this.props.email,this.props.history);
        const businessId = this.props.match.params.id
        // const reviewId = this.props.match.params.idd
        this.props.viewReview(businessId).then( ()=> {
            // console.log("-------awesome---",  this.props.businessReviews)
            // this.props.history.push('/dashboard');
        })
        // console.log(this.props.viewReview(businessId).review_data);
        // const review = this.props.match.params.id
        // this.props.viewReview(reviewId);
        // this.props.history.push("/addreview/:id");

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
        // console.log(businessId);
        this.props.reviewBusiness(businessId, this.jsonStringify(businessCredential)).then(()=>{
        //    this.props.history.push('/addreview/:id');
        }).catch(err=>{
            console.log(err.data);
            alert('addReview');
        });
    
        // this.props.reviewBusiness(businessId)


    }

//     componentDidMount() {
//         //  this.props.fetchReview();
//         this.props.history.push("/addreview");
   
//   }

    render () {
   
    
    // returns all businesses from props int a dict
    const reviews = Object.values({ ...this.props.businessReviews });
    // this.props.history.push("/addreview/:id");
    // const reviews = Object.assign({}, this.props.viewReview.review_data);
    // console.log(this.props.viewReview.review_data);

    // sorts/arrange business from recently added to previous
    if (reviews) {
      Array.prototype.reverse.call(reviews);
    }
        return (
    <div>
    
             <NavBar />
              <div className="container">
                  
              <div style= {{ margin: "3%" }}>
                    <h3 className="text-center">Below is a list of reviews on this particular business</h3>
                </div>
        
                <hr/>
                          
                
                </div>
                
        
                      <div style={{margin: "100px"}}>
                            <form   onSubmit={this.addReview } >
                                    <div className="form-group">
                                            <label className="control-label " for="description">Say Something about this Business:</label>
                                            <textarea className="form-control" cols="2" id="description" name="description" rows="5"></textarea>
                                          </div>
                  
                                
                                <div className="form-group">
                                    <button className="btn btn-primary " name="submit" type="submit">Add Review</button>
                                  </div>
                                </form>
                                
                                {this.props.username}
                          </div>
                          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
            <td>
                  <b>Description</b>
                </td>
                <td>
                  <b>says:</b>
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
                  reviews.map((review, index) => (
                    <tr key={review.id}>
                    <td>
                        {this.props.username}
                </td>
                      <td>{review.description}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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

ReviewBusiness.propTypes = {
    email: PropTypes.string.isRequired,
    reviewBusiness: PropTypes.func.isRequired,
    review: PropTypes.func.isRequired,
    viewReview: PropTypes.func.isRequired,
    businessReviews: PropTypes.object.isRequired
}

const mapStateToProps = state => {
   console.log(state, '--');
 return ({
    username: state.auth.loginData.username,
    email: state.auth.loginData.email,
    review: state.business.reviewBusinessMessage,
    businessReviews: state.business.fetchReviewMessage.review_data
 });
};

const mapDispatchToProps = dispatch => ({
    viewReview: (id) => dispatch(fetchReview(id)),
    reviewBusiness: (id, data)=> dispatch(reviewBusiness(id, data))
  });
  

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(ReviewBusiness));