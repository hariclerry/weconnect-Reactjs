import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //middleware import
import mainReducer from './reducers';


const middleware = [thunk];  //middleware setup

const weconnectStore = createStore(mainReducer, applyMiddleware(...middleware));

export  default weconnectStore;

