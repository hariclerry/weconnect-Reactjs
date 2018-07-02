import { REGISTER_USER, LOGIN_USER} from '../actions/types';

const initialState = {
    signupMessage: {},
    loginData: {}
    // resetPasswordData: {}
};

export default (state = initialState, action)=>{
    switch(action.type){
        case REGISTER_USER:
            return {...state, signupMessage:action.message}
        case LOGIN_USER:
            return {...state, loginData:action.user}
        default:
            return state;
    }

}
