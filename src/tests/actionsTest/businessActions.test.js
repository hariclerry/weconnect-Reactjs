import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import jwt from "jsonwebtoken";
import {url} from "actions/baseUrl"
import * as actions from "../../actions/businessActions";
import fetchMock from "fetch-mock";
import { REGISTER_BUSINESS,
  FETCH_BUSINESSES,
  SINGLE_BUSINESS,
  DELETE_BUSINESS,
  USER_BUSINESSES,
  EDIT_BUSINESS,
  REVIEW_BUSINESS,
  FETCH_BUSINESS_REVIEWS,
  SEARCH_BUSINESSES } from "../../actions/types";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });

const reviewData = { description: "Great customer services!" };
const reviewDataMock = { description: "Great customer services!", id: 1 };
const userBusinessDataMock = { name: "Andela", category: "Technology", location: "Bukoto street", description: "This is Andela", userid: 1, id: 1};
const businessDataMock = { name: "Andela", category: "Technology", location: "Bukoto street", description: "This is Andela", id: 1};
const businessData = { name: "Andela", category: "Technology", location: "Bukoto street", description: "This is Andela"};
const loginData = { email: "clerry@gmail.com", password: "clerry55" };
const loginUserMock = { token: jwt.sign({ email: "clerry@gmail.com", password: "clerry55" }, "hard to guess string") 
                        };

describe("all business actions", () => {
    let calledActions;
    beforeEach(() => {
        localStorage.setItem("token", loginUserMock.access_token);
        store.clearActions();
        calledActions = store.getActions();
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        })
    
    it('creates REGISTER_BUSINESS action after successfully creating a business', () => {
        localStorage.setItem("token", loginUserMock.access_token);
        fetchMock.postOnce(`${url}v1/api/businesses`,
        { body: businessData, headers: { access_token: localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: REGISTER_BUSINESS,
                message: businessDataMock
            }
            ];
        return store.dispatch(actions.registerBusiness(businessData));
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates SINGLE_BUSINESS action after successfully getting a business', () => {
      let id = businessDataMock.id;
      localStorage.setItem("token", loginUserMock.access_token);
      fetchMock.getOnce(`${url}v1/api/businesses/${id}`,
      { body: {}, headers: { access_token: localStorage.getItem("access_token"), 
                                    'Content-Type': 'application/json' }})
      const expectedActions = [
          { 
              type: SINGLE_BUSINESS,
              message: businessDataMock
          }
          ];
      return store.dispatch(actions.singleBusiness(id));
      expect(calledActions).toEqual(expectedActions);
  })

  it('creates DELETE_BUSINESS action after successfully deleting a business', () => {
      let id = businessDataMock.id;
      localStorage.setItem("token", loginUserMock.access_token);
      fetchMock.deleteOnce(`${url}v1/api/businesses/${id}`,
      { body: {}, headers: { access_token: localStorage.getItem("access_token"), 
                                    'Content-Type': 'application/json' }})
      const expectedActions = [
          { 
              type: DELETE_BUSINESS,
              message: businessDataMock,
              id: id
          }
          ];
      return store.dispatch(actions.deleteBusiness(id));
      expect(calledActions).toEqual(expectedActions);
  })

  it('creates EDIT_BUSINESS action after successfully editing a business', () => {
      let id = businessDataMock.id
      localStorage.setItem("token", loginUserMock.access_token);
      fetchMock.putOnce(`${url}v1/api/businesses/${id}`,
      { body: businessData, headers: { access_token: localStorage.getItem("access_token"), 
                                    'Content-Type': 'application/json' }})
      const expectedActions = [
          { 
              type: EDIT_BUSINESS,
              message: businessDataMock,
              id: id
          }
          ];
      return store.dispatch(actions.editBusiness(id));
      expect(calledActions).toEqual(expectedActions);
  })

  it('creates REVIEW_BUSINESS action after successfully adding a review to a business', () => {
      let id = businessDataMock.id;
      localStorage.setItem("token", loginUserMock.access_token);
      fetchMock.postOnce(`${url}v1/api/business/${id}/reviews`,
      { body: reviewData, headers: { access_token: localStorage.getItem("access_token"), 
                                    'Content-Type': 'application/json' }})
      const expectedActions = [
          { 
              type: REVIEW_BUSINESS,
              message: reviewDataMock,
              id: id
          }
          ];
      return store.dispatch(actions.reviewBusiness(id, reviewData));
      expect(calledActions).toEqual(expectedActions);
  })

  it('creates FETCH_BUSINESS_REVIEWS action after successfully getting all reviews for a business', () => {
      let id = businessDataMock.id;
      localStorage.setItem("token", loginUserMock.access_token);
      fetchMock.getOnce(`${url}v1/api/business/${id}/reviews`,
      { body: {}, headers: { access_token: localStorage.getItem("access_token"), 
                                    'Content-Type': 'application/json' }})
      const expectedActions = [
          { 
              type: FETCH_BUSINESS_REVIEWS,
              message: reviewDataMock
          }
          ];
      return store.dispatch(actions.fetchReview(id));
      expect(calledActions).toEqual(expectedActions);
  })

  it('creates SEARCH_BUSINESSES action after successfully getting businesses', () => {
    let q = "";
    localStorage.setItem("token", loginUserMock.access_token);
    fetchMock.getOnce(`${url}v1/api/businesses?q=${q}`,
    { body: {}, headers: { access_token: localStorage.getItem("access_token"), 
                                  'Content-Type': 'application/json' }})
    const expectedActions = [
        { 
            type: SEARCH_BUSINESSES,
            message: businessDataMock
        }
        ];
    return store.dispatch(actions.searchBusinesses(q));
    expect(calledActions).toEqual(expectedActions);
})

it('creates FETCH_BUSINESSES action after successfully getting businesses', () => {
    localStorage.setItem("token", loginUserMock.access_token);
    fetchMock.getOnce(`${url}v1/api/businesses`,
    { body: {}, headers: { access_token: localStorage.getItem("access_token"), 
                                  'Content-Type': 'application/json' }})
    const expectedActions = [
        { 
            type: FETCH_BUSINESSES,
            message: businessDataMock
        }
        ];
    return store.dispatch(actions.fetchBusinesses());
    expect(calledActions).toEqual(expectedActions);
})


it('creates USER_BUSINESSES action after successfully getting businesses', () => {
    let userid = userBusinessDataMock.userid;
    localStorage.setItem("token", loginUserMock.access_token);
    fetchMock.getOnce(`${url}v1/api/user/${userid}/businesses`,
    { body: {}, headers: { access_token: localStorage.getItem("access_token"), 
                                  'Content-Type': 'application/json' }})
    const expectedActions = [
        { 
            type: USER_BUSINESSES,
            message: businessDataMock
        }
        ];
    return store.dispatch(actions.userBusinesses(userid));
    expect(calledActions).toEqual(expectedActions);
})

  })
