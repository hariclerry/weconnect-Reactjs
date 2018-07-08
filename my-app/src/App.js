import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-notifications/lib/notifications.css';

import Routes from './components';
import weconnectStore from './store';
import history from './utils/history';
import jwtDecode from 'jwt-decode';
import {LOGIN_USER} from './actions/types'

// decode token and ensure user is dispatched to the store
const token = localStorage.getItem("access_token");
if(token){
 const user = jwtDecode(token)
 weconnectStore.dispatch( { type: LOGIN_USER,
  user: {   email: user.email,
            username: user.username,
           id: user.sub,
          access_token: token }
 })
}

class App extends Component {
  render() {
    return (
      <div>
        <Provider store = {weconnectStore} history={history}>  
          <div>
            <BrowserRouter>
              <Routes/>
            </BrowserRouter>
          </div>
        </Provider> 
      </div>
    );
  }
}

export default App;


