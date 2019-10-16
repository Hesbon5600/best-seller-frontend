import { all } from "redux-saga/effects";
import { cutomerLoginWatcher } from "./login.saga";
import { cutomerSignupWatcher } from "./signup.saga";
import { cutomerSocialLoginWatcher } from "./socialLogin.saga";
import { getCustomertDetailsWatcher } from "./customer_details.saga";

export default function* customerSaga() {
  yield all([
    cutomerLoginWatcher(),
    cutomerSignupWatcher(),
    cutomerSocialLoginWatcher(),
    getCustomertDetailsWatcher()
  ]);
}
