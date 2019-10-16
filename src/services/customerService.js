import axios from "axios";
import EventEmitter from "../utils/EventEmitter";
import systemConfig from "../config/system";
import * as auth from "../utils/index";
class customerService extends EventEmitter {
  loginCustomer = payload => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + "/customers/login", payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
  socialLoginCustomer = payload => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + "/customers/facebook", payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
  getCustomerDetails = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/customer/`, {
          headers: { Authorization: "Bearer" + auth.getToken() }
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
}

const instance = new customerService();

export default instance;
