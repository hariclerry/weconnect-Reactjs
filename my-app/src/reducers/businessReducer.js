import { REGISTER_BUSINESS, FETCH_BUSINESSES } from '../actions/types';

const initialState = {
    registerBusinessMessage: {},
    fetchBusinessMessage: {}
  
};

export default (state = initialState, action)=>{
    switch(action.type){
        case REGISTER_BUSINESS:
            return {...state, createBusinessMessage:action.message}
        case FETCH_BUSINESSES:
            return {...state, fetchBusinessMessage:action.message}

        default:
            return state;
    }

}