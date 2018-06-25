import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/jumbotron.css'

export default class Index extends React.Component {
    render () {
        return (
            <div>
                     
  
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="help.html">WeConnect</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="index.html">Home</a></li>
        <li><a href="help.html">Help</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
    
        <li><a href="/signup"><span className="glyphicon glyphicon-user"></span>{' '}Sign Up</a></li>
        <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span>{' '}Sign In</a></li>
        
      </ul>
    </div>
  </nav>

<div className="jumbotron">
          <div className="container">
           <h1>We Connect </h1>
                
           </div>
 </div>
          
            
<br/>
    <div className="container">
    <h3> Welcome to We Connect! Connect with millions of Businesses World wide</h3>
    <a href="signup.html" className="btn btn-start" role="button"><h4>Get Started</h4></a>
    </div>
    <hr/>
    
    <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={require('./static/images/reg.jpeg')} />
  
          <div className="caption">
            <h3>Register Business</h3>
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </div>
      </div>
    
      <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={require('./static/images/innovation.jpeg')} />
            <div className="caption">
              <h3>Give Review</h3>
              <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
            </div>
          </div>
        </div>
    
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={require('./static/images/business.jpeg')} />
             
              <div className="caption">
                <h3>Connect</h3>
                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
      </div>
    </div>


   

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