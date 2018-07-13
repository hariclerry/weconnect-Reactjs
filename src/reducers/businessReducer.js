import {
  REGISTER_BUSINESS,
  FETCH_BUSINESSES,
  SINGLE_BUSINESS,
  USER_BUSINESSES,
  DELETE_BUSINESS,
  EDIT_BUSINESS,
  REVIEW_BUSINESS,
  FETCH_BUSINESS_REVIEWS,
  SEARCH_BUSINESSES,
  CLEAR_BUSINESS_INFO
} from "../actions/types";

const initialState = {
  registerBusinessMessage: {},
  fetchBusinessMessage: {},
  searchBusinessMessage: {},
  userBusinessMessage: {},
  singleBusinessMessage: {
    business_data: {}
  },
  deleteBusinessMessage: {},
  editBusinessMessage: {},
  reviewBusinessMessage: {},
  fetchReviewMessage: {
    review_data: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_BUSINESS:
      return { ...state, registerBusinessMessage: action.message };
    case FETCH_BUSINESSES:
      return { ...state, fetchBusinessMessage: action.message };
    case SEARCH_BUSINESSES:
      return { ...state, searchBusinessMessage: action.message };
    case USER_BUSINESSES:
      return { ...state, userBusinessMessage: action.message };
    case SINGLE_BUSINESS:
      return { ...state, singleBusinessMessage: action.message };
    case DELETE_BUSINESS:
      return { ...state, deleteBusinessMessage: action.message };
    case EDIT_BUSINESS:
      return { ...state, editBusinessMessage: action.message };
    case REVIEW_BUSINESS:
      return { ...state, reviewBusinessMessage: action.message };
    case FETCH_BUSINESS_REVIEWS:
      return { ...state, fetchReviewMessage: action.message };

    default:
      return state;
  }
};
