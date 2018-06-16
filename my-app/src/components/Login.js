import React from 'react';
import './static/css/bootstrap.min.css'
import './static/css/stylesform.css'


export default class Login extends React.Component {
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
                  
        <h3> Please sign in to do more</h3>
    </div>
    <hr/>
    <div className="container" id="log-in-form">
        <div className="heading">
            <h1>Log In Your Account</h1>
        </div>
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="username" placeholder="Enter username"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
            </div>
            <div className="form-group form-group-btn">
                <button type="submit" className="btn btn-success btn-lg">Log In</button>
            </div>
            <div className="clearfix"></div>
            <div className="checkbox">
                <label>
                    <input type="checkbox"/> Remember me
                </label>
            </div>
        </form>
    </div>

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