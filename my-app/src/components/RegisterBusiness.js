import React from 'react';
import './static/css/bootstrap.min.css'


export default class RegisterBusiness extends React.Component {
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
    <footer className="row">
           
            <div className="panel-footer text-center bg-dark">
        <p>  &copy; Copyright 2018 <i>powered by</i>  <b> InfoClan</b> </p>
            </div>
    
         </footer>

            </div>

        )
    }
}