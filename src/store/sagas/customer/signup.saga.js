import { put, takeLatest, call } from "redux-saga/effects";
import customerService from "../../../services/customerService";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST
} from "../../actions";
import * as auth from "../../../utils";

export function* customerSignupSaga(action) {
  try {
    const data = yield call(customerService.signupCustomer, action.payload);
    yield put({
      type: SIGNUP_SUCCESS,
      payload: data
    });
    auth.setUsername(data.customer.name);
    auth.setToken(data.accessToken);
    window.location.href='/';
  } catch (error) {
    const data = error ? error.data : {};
    yield put({
      type: SIGNUP_FAILURE,
      payload: data
    });
  }
}

export function* cutomerSignupWatcher() {
  yield takeLatest(SIGNUP_REQUEST, customerSignupSaga);
}
