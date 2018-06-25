import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
/*import logo from './logo.svg';
import './App.css'; */
import Routes from './components';
import { weconnectStore } from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store = {weconnectStore} >  
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


