// import history from '../components/history';
import { REGISTER_BUSINESS, FETCH_BUSINESSES,  SINGLE_BUSINESS,  DELETE_BUSINESS,  USER_BUSINESSES, EDIT_BUSINESS, REVIEW_BUSINESS, FETCH_BUSINESS_REVIEWS } from './types';


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
    )
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
        {type: SINGLE_BUSINESS,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}




export const deleteBusiness = (id) => dispatch => {
    console.log("LOGGING: deleting...")
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/businesses/${id}`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: DELETE_BUSINESS,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}

export const editBusiness = (id, data) => dispatch => {
    console.log("LOGGING: updatinggggg...")
    let options = {
        method: 'PUT',
        body: data,
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/businesses/${id}`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: EDIT_BUSINESS,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}

export const reviewBusiness = (id, credentials) => dispatch => {
    console.log("LOGGING: reviewinggggg...")
    let options = {
        method: 'POST',
        body: credentials,
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };
    return fetch(`http://127.0.0.1:5000/v1/api/business/${id}/reviews`, options)
    .then(response => response.json())
    .then(data => {dispatch(
        {type: REVIEW_BUSINESS,
        message: data}
    );
    console.log(data)
    // history.push('/dashboard')
    ;})
}

export const fetchReview = (id) => dispatch => {
    console.log("LOGGING: review.......")
    let options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'access_token': localStorage.getItem('access_token')
            }
    };

    return fetch(`http://127.0.0.1:5000/v1/api/business/${id}/reviews`, options)
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: FETCH_BUSINESS_REVIEWS,
            message: data
        });
    });
}