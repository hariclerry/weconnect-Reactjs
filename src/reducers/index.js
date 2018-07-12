import { combineReducers } from "redux";
import authReducer from "./authReducer";
import businessReducer from "./businessReducer";

const mainReducer = combineReducers({
  auth: authReducer,
  business: businessReducer
});

export default mainReducer;
