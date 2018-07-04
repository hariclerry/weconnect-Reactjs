import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Index from './IndexPage';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import RegisterBusiness from './RegisterBusiness';
import BusinessList from './BusinessList';
import SingleBusiness from './SingleBusiness';
import UpdateBusiness  from './UpdateBusiness';
import AddReview from './AddReview';



class Routes extends React.Component {
    render () {
        return (
            <div>
            <div>
                <Route path= '/' exact component= { Index } />
                <Route path= '/index' exact component= { Index } />
                <Route path= '/signup' component= { Signup } />
                <Route path= '/login' component= { Login } />
                <Route path= '/dashboard' component= { Dashboard } />
                <Route path= '/registerbusiness' component= { RegisterBusiness } />
                <Route path= '/businesslist' component= { BusinessList } />
                <Route path= '/singlebusiness/:id' component= { SingleBusiness } />
                <Route path= '/editbusiness' component= { EditBusiness  } />
                <Route path= '/addreview' component= { AddReview } />

            </div>
            <div>
              <NotificationContainer/>
              </div>
            </div>


        )
    }
}
export default  withRouter (Routes); // maps routes and returns to browser router