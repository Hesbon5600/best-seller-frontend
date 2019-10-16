import { put, takeLatest, call } from "redux-saga/effects";
import customerService from "../../../services/customerService";
import {
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILURE
} from "../../actions";
import * as auth from "../../../utils";

export function* customerSocialLoginSaga(action) {
  console.log(action);
  try {
    const data = yield call(customerService.socialLoginCustomer, action.payload);
    console.warn(data.customer.name);
    yield put({
      type: SOCIAL_LOGIN_SUCCESS,
      payload: data
    });
    auth.setUsername(data.customer.name);
    auth.setToken(data.accessToken);
    window.location.href = "/";
  } catch (error) {
    const data = error ? error.data : {};
    yield put({
      type: SOCIAL_LOGIN_FAILURE,
      payload: data
    });
  }
}

export function* cutomerSocialLoginWatcher() {
  yield takeLatest(SOCIAL_LOGIN_REQUEST, customerSocialLoginSaga);
}
