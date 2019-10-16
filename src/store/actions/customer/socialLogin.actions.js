export const SOCIAL_LOGIN_REQUEST = "SOCIAL_LOGIN_REQUEST";
export const SOCIAL_LOGIN_SUCCESS = "SOCIAL_LOGIN_SUCCESS";
export const SOCIAL_LOGIN_FAILURE = "SOCIAL_LOGIN_FAILURE";

export const socialLoginAction = payload => ({
  type: SOCIAL_LOGIN_REQUEST,
  payload
});
export const socialLoginSuccess = payload => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload
});
export const socialLoginFailure = payload => ({
  type: SOCIAL_LOGIN_FAILURE,
  payload
});
