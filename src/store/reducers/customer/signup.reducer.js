import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../../actions/customer/signup.actions";

const initialState = { signupState: false };

const signupPReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: false,
        signupState: true
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default signupPReducer;
