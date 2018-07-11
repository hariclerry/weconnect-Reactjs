import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import {url} from "actions/baseUrl"
import * as actions from "actions/userActions";
import fetchMock from 'fetch-mock';
import { REGISTER_USER, LOGIN_USER, RESET_PASSWORD } from 'actions/types';
import mockLocalStorage from '../localStorage'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const registerdata = { username: "Clerry", email: "clerry@gmail.com",
                    password: "clerry55" };
const loginData = { email: "clerry@gmail.com", password: "clerry55" };
const resetPasswordData = { email: "clerry@gmail.com", password: "hari88" };
const resetPasswordMock = { email: "clerry@gmail.com", password: "hari88"};
const userRegisterMock = { user_id: 1, username: "Clerry", 
                           email: "clerry@gmail.com", password: "haricle55" };
const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "clerry55" }, "hard to guess string") 
                        };

describe("user actions", () => {
    let triggeredActions;
    beforeEach(() => {
      localStorage.setItem("token", loginUserMock.access_token);
      store.clearActions();
      triggeredActions = store.getActions();
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        })
    
    it('creates REGISTER_USER action after successfully registering a user', () => {
        fetchMock.postOnce(`${url}v1/api/auth/register`,
        { body: registerdata, headers: { 'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: REGISTER_USER,
                message: userRegisterMock 
            }
            ];

        return store.dispatch(actions.registerUser(registerdata));
        expect(triggeredActions).toEqual(expectedActions);
    })


    it('creates LOGIN_USER action after successfully logging in a user', () => {
        fetchMock.postOnce(`${url}v1/api/auth/login`,
        { body: loginData, headers: { 'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: LOGIN_USER,
                user: loginUserMock 
            }
            ];
        return store.dispatch(actions.loginUser(loginData));
        expect(triggeredActions).toEqual(expectedActions);
    })

    // it('does not create LOGIN_USER action if no user data is provided', () => {
    //     fetchMock.postOnce(`${url}v1/api/auth/login`,
    //     { body: {}, headers: { 'Content-Type': 'application/json' }})
    //     const expectedActions = [
    //         { 
    //             type: LOGIN_USER,
    //             user: {} 
    //         }
    //         ];
    //     return store.dispatch(actions.loginUser());
    //     expect(calledActions).toEqual(expectedActions);
    // })

//     it('creates LOGOUT_USER action after successfully logging out a user', () => {
//         sessionStorage.setItem("access_token", loginUserMock.token);
//         fetchMock.postOnce('/api/v2/auth/logout',
//         { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
//                                       'Content-Type': 'application/json' }})
//         const expectedActions = [
//             { 
//                 type: LOGOUT_USER,
//                 payload: loginUserMock.token
//             }
//             ];
//         return store.dispatch(actions.logOut());
//         expect(calledActions).toEqual(expectedActions);
//     })

//     it('creates RESET_PASSWORD action after a user successfully resets their  password', () => {
//         sessionStorage.setItem("access_token", loginUserMock.token);
//         fetchMock.postOnce('/api/v2/auth/reset-password',
//         { body: resetPasswordData, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
//                                       'Content-Type': 'application/json' }})
//         const expectedActions = [
//             { 
//                 type: RESET_PASSWORD,
//                 payload: resetPasswordMock
//             }
//             ];
//         return store.dispatch(actions.resetPassword(resetPasswordData))
//         expect(calledActions).toEqual(expectedActions);
//     })

//     it('does not create RESET_PASSWORD action if no user data is provided', () => {
//         sessionStorage.setItem("access_token", loginUserMock.token);
//         fetchMock.postOnce('/api/v2/auth/reset-password',
//         { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
//                                       'Content-Type': 'application/json' }})
//         const expectedActions = [
//             { 
//                 type: RESET_PASSWORD,
//                 payload: {}
//             }
//             ];
//         return store.dispatch(actions.resetPassword())
//         expect(calledActions).toEqual(expectedActions);
//     })

})