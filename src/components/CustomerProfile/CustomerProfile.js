import React, { Component } from "react";
import CustomerFormInput from "../CustomerFormInput";
import { getCustomerDetailsAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core";
import * as auth from "../../utils/index";
import styles from "./styles";

class CustomerProfile extends Component {
  state = {
    userData: {
      name: "",
      email: "",
      password: "",
      day_phone: "",
      eve_phone: "",
      mob_phone: ""
    },
    confirm: { confirmPass: "" },
    message: "",
    error: ""
  };
  handleChange = e => {
    const { value, name } = e.target;
    const { userData, confirm } = this.state;
    userData[name] = value;
    confirm[name] = value;
    this.setState({ userData, confirm });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { userData, confirm } = this.state;
    if (userData.password !== confirm.confirmPass) {
      this.setState({ error: "The two passwords did not match!" });
    } else {
      const { customerActions } = this.props;
      customerActions(userData).then(data => {
        if (data.type === "UPDATE_CUSTOMER_SUCCESS") {
          this.setState({ message: "Profile updated successfully." });
          auth.setUsername(data.data.name);
          this.fetchCustomerData();
        }
      });
    }
  };

  render() {
    const { customerDetails } = this.props;
    console.log(this.pro)
    return (
      <div className="container shipping-container">
        <div className="row shipping">
          <div className="col-md-12">
            {/* {response ? <span className={response === error ? resErr : resSuccess}>{response}</span> : ''} */}
            <br />
            <br />
            <h3 className="header-address">User Profile</h3>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <CustomerFormInput
                name="name"
                label="Customer Name*"
                handleChange={this.handleChange}
                placeholder={customerDetails.name}
                className="form-control"
                required="required"
                type="text"
              />
              <CustomerFormInput
                name="email"
                label="Customer Email*"
                handleChange={this.handleChange}
                placeholder={customerDetails.email}
                className="form-control"
                required="required"
                type="text"
              />
              <CustomerFormInput
                name="day_phone"
                label="Customer Day Phone"
                handleChange={this.handleChange}
                placeholder={customerDetails.day_phone}
                className="form-control"
                type="phone"
              />
              <CustomerFormInput
                name="eve_phone"
                label="Customer Eve Phone"
                handleChange={this.handleChange}
                placeholder={customerDetails.eve_phone}
                className="form-control"
                type="phone"
              />
              <CustomerFormInput
                name="mob_phone"
                label="Customer Mobile Phone"
                handleChange={this.handleChange}
                placeholder={customerDetails.mob_phone}
                className="form-control"
                type="phone"
              />
              <CustomerFormInput
                name="password"
                label="New Password"
                handleChange={this.handleChange}
                placeholder="New Password"
                className="form-control"
                type="password"
              />
              <CustomerFormInput
                name="confirmPass"
                label="Confirm New Password"
                handleChange={this.handleChange}
                placeholder="Confirm New Password"
                className="form-control"
                type="password"
              />
              <div className="form-group row">
                <div className="offset-4 col-8">
                  <button
                    name="submit"
                    type="submit"
                    className="add-to-cart btn btn-default"
                  >
                    Update My Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ customer }) {
  return {
    customerDetails: customer.customerDetails
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ customerDetails: getCustomerDetailsAction }, dispatch);
export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(CustomerProfile)
  )
);
