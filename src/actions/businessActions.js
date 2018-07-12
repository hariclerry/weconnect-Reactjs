import {url} from "actions/baseUrl"
import {
  REGISTER_BUSINESS,
  FETCH_BUSINESSES,
  SINGLE_BUSINESS,
  DELETE_BUSINESS,
  USER_BUSINESSES,
  EDIT_BUSINESS,
  REVIEW_BUSINESS,
  FETCH_BUSINESS_REVIEWS,
  SEARCH_BUSINESSES
} from "./types";
import { notify } from "react-notify-toast";

export const registerBusiness = credentials => dispatch => {
  let options = {
    method: "POST",
    body: credentials,
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  return fetch(`${url}v1/api/businesses`, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: REGISTER_BUSINESS,
        message: data
      });
      // notify.show("Business successfully registered", "success");
    });
};

export const fetchBusinesses = (page = "") => dispatch => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  if (page === "") {
    return fetch(`${url}v1/api/businesses`, options)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_BUSINESSES,
          prevPage: data["prev_page"],
          nextPage: data["next_page"],
          message: data
        });
      });
  } else {
    return fetch(`${url}v1/api/businesses?page=` + page,
      options
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_BUSINESSES,
          prevPage: data["prev_page"],
          nextPage: data["next_page"],
          message: data
        });
      });
  }
};

export const searchBusinesses = (q = "") => dispatch => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  if (q !== "") {
    return fetch(`${url}v1/api/businesses?q=${q}`, options)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: SEARCH_BUSINESSES,
          message: data
        });
      });
  }
};

export const userBusinesses = userid => dispatch => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  return fetch(`${url}v1/api/user/${userid}/businesses`,
    options
  )
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: USER_BUSINESSES,
        message: data
      });
    });
};

export const singleBusiness = id => dispatch => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  return fetch(`${url}v1/api/businesses/${id}`, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: SINGLE_BUSINESS,
        message: data
      });
    });
};

export const deleteBusiness = id => dispatch => {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  return fetch(`${url}v1/api/businesses/${id}`, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: DELETE_BUSINESS,
        message: data
      });
    });
};

export const editBusiness = (id, data) => dispatch => {
  let options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  return fetch(`${url}v1/api/businesses/${id}`, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: EDIT_BUSINESS,
        message: data
      });
      // history.push('/dashboard')
    });
};

export const reviewBusiness = (id, credentials) => dispatch => {
  let options = {
    method: "POST",
    body: credentials,
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };
  return fetch(`${url}v1/api/business/${id}/reviews`, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: REVIEW_BUSINESS,
        message: data
      });

    });
};

export const fetchReview = id => dispatch => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token: localStorage.getItem("access_token")
    }
  };

  return fetch(`${url}v1/api/business/${id}/reviews`, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_BUSINESS_REVIEWS,
        message: data
      });
      console.log("Data received:", data);
    });
};
