import { REGISTER_USER, LOGIN_USER, LOGOUT__USER } from './types';
import jwtDecode from 'jwt-decode'
// import history from '../components/history';

export const registerUser = credentials => dispatch => {
    console.log("registering...")
    let options = {
        method: 'POST',
        body: credentials,
        headers: {
            'Content-Type':'application/json'
            }
    };
    fetch(`http://127.0.0.1:5000/v1/api/auth/register`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: REGISTER_USER,
        message: data}
    );
    // history.push('/login')
    ;})
}

export const loginUser = credentials => dispatch => {
    console.log("loginnng...")
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
        console.log(data)
        localStorage.setItem("user_id",user.sub);
       return dispatch( { type: LOGIN_USER,
        user: {   email: user.email,
                id: user.sub,
                access_token: data.access_token }
       });
    });
    // history.push('/registerbusiness') 
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