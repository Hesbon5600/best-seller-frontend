import { combineReducers } from "redux";
import login from "./login.reducer";
import signup from "./signup.reducer";
import socialLogin from "./socialLogin.reducer";
import customerDetails from "./customerDetail.reducer";

const customer = combineReducers({
  login,
  signup,
  socialLogin,
  customerDetails
});

export default customer;
