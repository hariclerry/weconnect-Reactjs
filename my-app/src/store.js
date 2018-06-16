import { createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers'
import thunk from 'redux-thunk' //middleware import

const middleware = [thunk]  //middleware setup

export const weconnectStore = createStore(mainReducer, applyMiddleware(...middleware));