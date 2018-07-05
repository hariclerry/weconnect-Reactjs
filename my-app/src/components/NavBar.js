import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../actions/userActions';

const NavBar = ({logoutUser}) =>(
     <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">WeConnect</a>
                  </div>
                 
                  
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href=""><span className="glyphicon glyphicon-user"></span>User</a></li>
                        <li><button onClick={()=>logoutUser()}><span className="glyphicon glyphicon-log-out"></span> Logout</button></li>
                          </ul>
        <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>
            <li>
                <a href="/registerbusiness">Register Business</a>
            </li>
            <li>
                <a href="/businesslist">All Businesses</a>
            </li>
        </ul>
              </div>
              </nav>
)

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired
}

export default connect(null,{logoutUser})(NavBar);