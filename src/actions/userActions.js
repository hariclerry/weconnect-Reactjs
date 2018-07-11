import { REGISTER_USER, LOGIN_USER, RESET_PASSWORD } from './types';
import {notify} from 'react-notify-toast';
import jwtDecode from 'jwt-decode'
// import history from '../components/history';

export const registerUser = credentials => dispatch => {
    let options = {
        method: 'POST',
        body: credentials,
        headers: {
            'Content-Type':'application/json'
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/auth/register`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: REGISTER_USER,
        message: data}
    );
    // notify.show("Successfully registered, please log in", "success");
    // history.push('/login')
    ;})
}

export const loginUser = credentials => dispatch => {
    let options = {
        method: 'POST',
        body: credentials,
        headers: {
            'Content-Type':'application/json'
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/auth/login`, options)
    .then(response => response.json())
    .then(data => {
        //decode the token to know which user is logging in.
        const user = jwtDecode(data.access_token);
        localStorage.setItem("access_token",data.access_token); 
        localStorage.setItem("user_id",user.sub);
       return dispatch( { type: LOGIN_USER,
        user: {   email: user.email,
                id: user.sub,
                username: user.username,
                access_token: data.access_token }
       }
    );
    }).catch(e=>{
        // do something with the error
        // console.log("An error occured")
    });
    // history.push('/registerbusiness') 
}

export const passwordReset = credentials => dispatch => {
    let options = {
        method: 'POST',
        body: credentials,
        headers: {
            'Content-Type':'application/json',
            access_token: localStorage.getItem("access_token")
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/auth/reset_password`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: RESET_PASSWORD,
        message: data}
    );
    // notify.show("Successfully registered, please log in", "success");
    // history.push('/login')
    ;})
}

export const logoutUser  = () => dispatch => {
    localStorage.removeItem('access_token');
    window.location.reload();
}

export const checkIfUserIsLoggedIn = (email,history) =>{
    if(email) return;
    localStorage.removeItem("access_token");
    history.push('/login');
}