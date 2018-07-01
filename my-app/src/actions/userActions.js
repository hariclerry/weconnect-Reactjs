import { REGISTER_USER, LOGIN_USER} from './types';
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
    fetch(`http://127.0.0.1:5000/v1/api/auth/login`, options)
    .then(response => response.json())
    .then(data => dispatch(
        {type: LOGIN_USER,
        token: data}
    ));
    // history.push('/registerbusiness') 
}