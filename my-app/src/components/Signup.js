import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/jumbotron.css'
import './static/css/styles.css'


export default class Signup extends React.Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">WeConnect</a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="help.html">Help</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                  
                
                   
                     
                    <li><a href="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</a></li>
                    <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span>Sign In</a></li>
                    
                  </ul>
                </div>
              </nav>

              <div className="container">
                <h3> Please fill in the registration form below to sign in</h3>
         </div>
         <hr/>
         <div className="container" id="registration-form">
               <div className="image"></div>
               <div className="frm">
                   <h1>Sign up</h1>
                   <form>
                       <div className="form-group">
                           <label for="username">Username:</label>
                           <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                       </div>
                       <div className="form-group">
                           <label for="email">Email:</label>
                           <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                       </div>
                       <div className="form-group">
                           <label for="pwd">Password:</label>
                           <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
                       </div>
                       <div className="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
                    </div>
                       <div className="form-group">
                           <button type="submit" className="btn btn-success btn-lg">Submit</button>
                       </div>
                   </form>
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