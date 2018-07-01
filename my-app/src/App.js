import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './components';
import weconnectStore from './store';
import history from './components/history';



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

// // App.propTypes = {
// //   store:PropTypes.object.isRequired
// }
export default App;


