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

    it('creates RESET_PASSWORD action after a user successfully resets their  password', () => {
      localStorage.setItem("token", loginUserMock.access_token);
        fetchMock.postOnce(`${url}v1/api/auth/reset_password`,
        { body: resetPasswordData, headers: {  access_token: localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: RESET_PASSWORD,
                message: resetPasswordMock
            }
            ];
        return store.dispatch(actions.passwordReset(resetPasswordData))
        expect(triggeredActions).toEqual(expectedActions);
    })

})