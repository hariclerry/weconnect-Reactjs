import { REGISTER_BUSINESS, FETCH_BUSINESSES, SINGLE_BUSINESS, USER_BUSINESSES } from '../actions/types';

const initialState = {
    registerBusinessMessage: {},
    fetchBusinessMessage: {},
    userBusinessMessage: {},
    singleBusinessMessage: {}
  
};

export default (state = initialState, action)=>{
    switch(action.type){
        case REGISTER_BUSINESS:
            return {...state, createBusinessMessage:action.message}
        case FETCH_BUSINESSES:
            return {...state, fetchBusinessMessage:action.message}
        case USER_BUSINESSES:
            return {...state, userBusinessMessage:action.message}
        case SINGLE_BUSINESS:
            return {...state, singleBusinessMessage:action.message}

        default:
            return state;
    }

}