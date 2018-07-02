import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //middleware import
import mainReducer from './reducers';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


// const middleware = [thunk];  //middleware setup

const weconnectStore = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export  default weconnectStore;

