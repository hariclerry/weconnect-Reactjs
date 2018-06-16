import { combineReducers } from 'redux';
import authReducer from './authReducer';

const mainReducer = combineReducers({
    authenticate: authReducer
});

export default mainReducer;