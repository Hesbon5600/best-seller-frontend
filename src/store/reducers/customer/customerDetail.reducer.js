import {
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAILURE
} from "../../actions";
const initialState = {
  isLoading: false,
  error: false,
  loginState: false
};

const customerDetailsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CUSTOMER_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case CUSTOMER_DETAILS_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: false,
        loginState: true
      };
    }
    case CUSTOMER_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default customerDetailsReducer;
