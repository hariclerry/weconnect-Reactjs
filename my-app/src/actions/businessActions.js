// import history from '../components/history';
import { REGISTER_BUSINESS, FETCH_BUSINESSES,  SINGLE_BUSINESS,  USER_BUSINESSES  } from './types';


export const registerBusiness = credentials => dispatch => {
    console.log("registering...")
    let options = {
        method: 'POST',
        body: credentials,
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/businesses`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: REGISTER_BUSINESS,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}

export const fetchBusinesses = () => dispatch => {
    console.log("fetching...")
    let options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/businesses`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: FETCH_BUSINESSES,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}

export const userBusinesses = (userid) => dispatch => {
    console.log("fetching...")
    let options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/user/${userid}/businesses`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: USER_BUSINESSES,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}


export const singleBusiness = (id) => dispatch => {
    console.log("fetching...")
    let options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/businesses/${id}`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: FETCH_BUSINESSES,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}