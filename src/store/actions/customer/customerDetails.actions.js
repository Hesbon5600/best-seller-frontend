export const CUSTOMER_DETAILS_REQUEST = "CUSTOMER_DETAILS_REQUEST";
export const CUSTOMER_DETAILS_SUCCESS = "CUSTOMER_DETAILS_SUCCESS";
export const CUSTOMER_DETAILS_FAILURE = "CUSTOMER_DETAILS_FAILURE";

export const getCustomerDetailsAction = payload => ({
  type: CUSTOMER_DETAILS_REQUEST,
  payload
});
export const getCustomerDetailsSuccess = payload => ({
  type: CUSTOMER_DETAILS_SUCCESS,
  payload
});
export const getCustomerDetailsFailure = payload => ({
  type: CUSTOMER_DETAILS_FAILURE,
  payload
});
