import mainReducer from "reducers/index";
import reducer from "reducers/businessReducer";
import { REGISTER_BUSINESS,
  FETCH_BUSINESSES,
  SINGLE_BUSINESS,
  USER_BUSINESSES,
  DELETE_BUSINESS,
  EDIT_BUSINESS,
  REVIEW_BUSINESS,
  FETCH_BUSINESS_REVIEWS,
  SEARCH_BUSINESSES } from "actions/types";

  describe('all business Reducer', ()=>{
    let business;
    let review;
    let initialState;

    beforeEach(() => {
        business = { name: "Andela", category: "Technology", location: "Bukoto street", description: "This is Andela"};
        review = { description: "This is Andela" }
        initialState = {
        registerBusinessMessage: {},
        fetchBusinessMessage: {},
        searchBusinessMessage: {},
        userBusinessMessage: {},
        singleBusinessMessage: {business_data: {}},
        deleteBusinessMessage: {},
        editBusinessMessage: {},
        reviewBusinessMessage: {},
        fetchReviewMessage: {review_data: []}};
      });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ registerBusinessMessage:{},
          fetchBusinessMessage: {},
          searchBusinessMessage: {},
          userBusinessMessage: {},
          singleBusinessMessage: {business_data: {}},
          deleteBusinessMessage: {},
          editBusinessMessage: {},
          reviewBusinessMessage: {},
          fetchReviewMessage: {review_data: []} });
    });  
        
    it("should handle REGISTER_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: REGISTER_BUSINESS,
            message: business
            })
        ).toEqual({ registerBusinessMessage: business,
          fetchBusinessMessage: {},
          searchBusinessMessage: {},
          userBusinessMessage: {},
          singleBusinessMessage: {business_data: {}},
          deleteBusinessMessage: {},
          editBusinessMessage: {},
          reviewBusinessMessage: {},
          fetchReviewMessage: {review_data: []} });
    });
  
it("should handle FETCH_BUSINESSES ", () => {
  expect(
      reducer(initialState, {
      type: FETCH_BUSINESSES,
      message: business
      })
  ).toEqual({ fetchBusinessMessage: business,
   searchBusinessMessage: {},
    userBusinessMessage: {},
    singleBusinessMessage: {business_data: {}},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: {},
    fetchReviewMessage: {review_data: []} });
});

it("should handle SINGLE_BUSINESS ", () => {
  expect(
      reducer(initialState, {
      type: SINGLE_BUSINESS,
      message: business
      })
  ).toEqual({ singleBusinessMessage: business,
    fetchBusinessMessage: {},
    searchBusinessMessage: {},
    userBusinessMessage: {},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: {},
    fetchReviewMessage: {review_data: []} 
  });
});

it("should handle DELETE_BUSINESS ", () => {
  expect(
      reducer(initialState, {
      type: DELETE_BUSINESS,
      message: business
      })
  ).toEqual({
    fetchBusinessMessage: {},
    searchBusinessMessage: {},
    userBusinessMessage: {},
    singleBusinessMessage: {business_data: {}},
    deleteBusinessMessage: business,
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: {},
    fetchReviewMessage: {review_data: []}
      
  });
});

it("should handle EDIT_BUSINESS ", () => {
  expect(
      reducer(initialState, {
      type: EDIT_BUSINESS,
      message: business
      })
  ).toEqual({ singleBusinessMessage: {business_data: {}},
    fetchBusinessMessage: {},
    searchBusinessMessage: {},
    userBusinessMessage: {},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: business,
    reviewBusinessMessage: {},
    fetchReviewMessage: {review_data: []}
      
  });
});

it("should handle REVIEW_BUSINESS ", () => {
  expect(
      reducer(initialState, {
      type: REVIEW_BUSINESS,
      message: review
      })
  ).toEqual({ 
    singleBusinessMessage: {business_data: {}},
    fetchBusinessMessage: {},
    searchBusinessMessage: {},
    userBusinessMessage: {},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: review,
    fetchReviewMessage: {review_data: []}
  });
});

it("should handle FETCH_BUSINESS_REVIEWS ", () => {
  expect(
      reducer(initialState, {
      type: FETCH_BUSINESS_REVIEWS,
      message: review
      })
  ).toEqual({
    singleBusinessMessage: {business_data: {}},
    fetchBusinessMessage: {},
    searchBusinessMessage: {},
    userBusinessMessage: {},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: {},
    fetchReviewMessage: review
      
  });
});

it("should handle SEARCH_BUSINESSES ", () => {
  expect(
      reducer(initialState, {
      type: SEARCH_BUSINESSES,
      message: business
      })
  ).toEqual({ singleBusinessMessage: {business_data: {}},
    fetchBusinessMessage: {},
    searchBusinessMessage: business,
    userBusinessMessage: {},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: {},
    fetchReviewMessage: {review_data: []}
      
  });
});

it("should handle USER_BUSINESSES ", () => {
  expect(
      reducer(initialState, {
      type: USER_BUSINESSES,
      message: business
      })
  ).toEqual({
    fetchBusinessMessage: {},
    searchBusinessMessage: {},
    userBusinessMessage: business,
    singleBusinessMessage: {business_data: {}},
    deleteBusinessMessage: {},
    registerBusinessMessage:{},
    editBusinessMessage: {},
    reviewBusinessMessage: {},
    fetchReviewMessage: {review_data: []}
      
  });
});


}); 
