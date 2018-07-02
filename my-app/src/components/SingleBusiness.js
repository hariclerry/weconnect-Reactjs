import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './static/css/bootstrap.min.css'


export default class SingleBusiness extends React.Component {
    render () {
        return (
    <div>
    
    <NavBar />
    
            <div className="container">
            <h4>Hello User, Below is business A </h4>
            <hr/>
                       
              <div className="table-responsive">
              <table className="table table-striped">
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
    <Footer />
     </div>

        )
    }
}