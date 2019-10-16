import { put, takeLatest, call } from "redux-saga/effects";
import customerService from "../../../services/customerService";
import {
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAILURE
} from "../../actions";

function* getCustomerDetailsSaga(action) {
  try {
    const data = yield call(customerService.getCustomerDetails);
    yield put({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    const data = error ? error.data : {};
    yield put({
      type: CUSTOMER_DETAILS_FAILURE,
      payload: data
    });
  }
}

export function* getCustomertDetailsWatcher() {
  yield takeLatest(CUSTOMER_DETAILS_REQUEST, getCustomerDetailsSaga);
}
