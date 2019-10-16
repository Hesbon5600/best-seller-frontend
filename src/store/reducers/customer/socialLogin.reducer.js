import {
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILURE
} from "../../actions/customer";
const initialState = {
  isLoading: false,
  error: false,
  loginState: false
};

const socialLoginReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SOCIAL_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case SOCIAL_LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: false,
        loginState: true
      };
    }
    case SOCIAL_LOGIN_FAILURE: {
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

export default socialLoginReducer;
