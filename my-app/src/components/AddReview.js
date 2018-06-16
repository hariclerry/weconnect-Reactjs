import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/stylesform.css'


export default class AddReview extends React.Component {
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
    <footer className="row">
           
            <div className="panel-footer text-center bg-dark">
        <p>  &copy; Copyright 2018 <i>powered by</i>  <b> InfoClan</b> </p>
            </div>
    
         </footer>
    </div>

        )
    }
}