// store, where the state of the application lives
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //middleware import
import mainReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const weconnectStore = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export  default weconnectStore;

