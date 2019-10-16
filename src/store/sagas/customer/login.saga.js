import { put, takeLatest, call } from "redux-saga/effects";
import customerService from "../../../services/customerService";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../../actions";
import * as auth from "../../../utils";

export function* customerLoginSaga(action) {
  try {
    const data = yield call(customerService.loginCustomer, action.payload);
    console.warn(data.customer.name);
    yield put({
      type: LOGIN_SUCCESS,
      payload: data
    });
    auth.setUsername(data.customer.name);
    auth.setToken(data.accessToken);
    window.location.href='/';
  } catch (error) {
    const data = error ? error.data : {};
    yield put({
      type: LOGIN_FAILURE,
      payload: data
    });
  }
}

export function* cutomerLoginWatcher() {
  yield takeLatest(LOGIN_REQUEST, customerLoginSaga);
}
