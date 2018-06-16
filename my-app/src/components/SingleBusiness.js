import React from 'react';
import './static/css/bootstrap.min.css'


export default class SingleBusiness extends React.Component {
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
                       
              <div className="table-responsive">
              <table className="table table-striped">
                        
                          <h4>Hello User, Below is business A </h4>

                         <hr/>
                         <form  action="" method="POST">
                                <div>
                                  <div className="col-md-8 col-md-offset-2 businesssearch">
                                    <div className="input-group">
                                           <input type="text" className="form-control" placeholder="Type business category or location" name="search"/>
                                             <span className="input-group-btn">
                                               <button className="btn btn-search" type="submit" id="search"><i className="fa fa-search fa-fw"></i> Search</button>
                                             </span>
                                   </div>
                                  </div>
                                </div>
                             </form>
                             <tbody >
                                <tr>
                                        <td>Clerry's Boutique</td>
                                        <td>Fashion</td>
                                        <td>Kabale</td>
                                        <td>Dress your Best</td>
                                        <td>Clerry</td>
                                        <td>
                                        
                                              <a href="addreview" className="btn btn-info" role="button">Add Review</a>
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