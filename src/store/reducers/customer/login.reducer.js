import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../../actions/customer/login.actions";
const initialState = {
  isLoading: false,
  error: false,
  loginState: false
};

const loginReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: false,
        loginState: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
