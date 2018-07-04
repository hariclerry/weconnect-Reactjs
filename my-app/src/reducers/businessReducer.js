import { REGISTER_BUSINESS, FETCH_BUSINESSES, SINGLE_BUSINESS, USER_BUSINESSES, DELETE_BUSINESS, EDIT_BUSINESS} from '../actions/types';

const initialState = {
    registerBusinessMessage: {},
    fetchBusinessMessage: {},
    userBusinessMessage: {},
    singleBusinessMessage: {
        business_data: {}
    },
    deleteBusinessMessage: {},
    editBusinessMessage: {}
  
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
        case DELETE_BUSINESS:
            return {...state,  deleteBusinessMessage:action.message}
        case EDIT_BUSINESS:
            return {...state,  editBusinessMessage:action.message}

        default:
            return state;
    }

}