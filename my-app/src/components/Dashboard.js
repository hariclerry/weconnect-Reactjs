import React from 'react';
import './static/css/bootstrap.min.css'


export default class Dashboard extends React.Component {
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
                        <li><a href="/"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
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
                       
              <div className="table-responsive">
                      <table className="table table-striped">
                        
                          <h4>Hello User, welcome to your dashboard, Below are a list of your Registered businesses</h4>
                         <hr/>
                          <thead> 
                                  <td><b>Name</b></td>
                                  <td><b>Category</b></td>
                                  <td><b>Location</b></td>
                                  <td><b>Description</b></td>
                                  <td><b>Reviews</b></td>
                                  <td><b>Options</b></td>
                                  
                          </thead>
                          <tbody >
                             
                              <tr>
                                  <td>Andela</td>
                                  <td>Technology</td>
                                  <td>Kampala</td>
                                  <td>This is Andela</td>
                                  <td>
                                  
                                      <a href="review.html" className="btn btn-info" role="button">View Reviews</a>
                                  </td>
                                  <td>
                                      <a href="updatebusiness" className="btn btn-info" role="button" style={{float: "left"}}>Edit</a>
                                      <a href="delete" className="btn btn-info" role="button" style={{float: "right"}}>Delete</a>
                              
                                  </td>
                                 
                              </tr>
                             
                          </tbody>
                         
                       </table>
                  </div>
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