import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/stylesform.css'
import NavBar from './NavBar';
import Footer from './Footer';


export default class AddReview extends React.Component {
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
                            <form  action ="/addreview" method="POST" >
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