export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signupAction = payload => ({
  type: SIGNUP_REQUEST,
  payload
});
export const signupSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});
export const signupFailure = payload => ({
  type: SIGNUP_FAILURE,
  payload
});
