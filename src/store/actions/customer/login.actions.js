export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginAction = payload => ({
  type: LOGIN_REQUEST,
  payload
});
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});
export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
});
