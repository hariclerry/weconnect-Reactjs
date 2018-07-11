import mainReducer from "reducers/index";
import reducer from "reducers/authReducer";
import { REGISTER_USER, LOGIN_USER, RESET_PASSWORD } from "actions/types";

describe('auth Reducer', ()=>{
    let signupMessage;
    let loginData;
    let resetPasswordData;
    let initialState;

    beforeEach(() => {
        signupMessage = { username: "clerry", email: "clerry@gmail.com", password: "clerry77*" };
        loginData = {email: "clerry@gmail.com", password: "clerry77*"  };
        resetPasswordData = {email: "clerry@gmail.com", password: "clerry55!"  };
        initialState = {
          signupMessage: {},
          loginData: {},
          resetPasswordData: {}
        };
      });

      it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({  signupMessage: {}, loginData: {}, 
          resetPasswordData: {} });
      });

      it("should handle REGISTER_USER ", () => {
        expect(
          reducer(initialState, {
            type: REGISTER_USER,
            message: signupMessage
          })
        ).toEqual({
            signupMessage: signupMessage, 
            loginData: {}, resetPasswordData: {}
        });
      });

      it("should handle LOGIN_USER ", () => {
        expect(
          reducer(initialState, {
            type: LOGIN_USER,
            user: loginData
          })
        ).toEqual({
            loginData: loginData, 
            signupMessage:{}, resetPasswordData:{}
        });
      });


      it("should handle RESET_PASSWORD ", () => {
        expect(
          reducer(initialState, {
            type: RESET_PASSWORD,
            user: resetPasswordData
          })
        ).toEqual({
          resetPasswordData: resetPasswordData, 
          signupMessage:{}, loginData:{}
        });
      });

      it("should export combine reducer", () => {
        expect(mainReducer).toBeDefined();
      });
});