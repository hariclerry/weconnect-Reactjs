import React from 'react';
import './static/css/bootstrap.min.css'
import NavBar from './NavBar';
import Footer from './Footer';


export default class UpdateBusiness extends React.Component {
    render () {
        return (
    <div>
            <NavBar />
    
             
                  

                        <div className="container">
                               <h3> You can now update your Business</h3>
                        </div>
                        <hr/>
                        <div style={{margin: "100px"}}>
                        <form>
                          
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