import React, { Component } from "react";
import { Button, InputAdornment, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EmailIcon from "@material-ui/icons/Email";
import FacebookLogin from "react-facebook-login";
import PasswordIcon from "@material-ui/icons/VpnKey";
import { TextFieldFormsy, ErrorLabel } from "../../../../components/Formsy";
import Formsy from "formsy-react";
import { loginAction, socialLoginAction } from "../../../../store/actions";
import styles from "./styles";
import "./styles.css";

class LoginForm extends Component {
  form = React.createRef();

  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { loginCustomer } = this.props;
    const data = { email, password };
    loginCustomer(data);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  responseFacebook = response => {
    console.log("facebook response>>>>>>>>>>>>>>>>", response);
    const { accessToken } = response;
    const { socialLoginCustomer } = this.props;
    socialLoginCustomer({ access_token: accessToken });
};
render() {
    const { error } = this.props.login;
    return (
      <div className="w-full flex flex-row justify-center">
        <Formsy
          ref={form => (this.form = form)}
          className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
          id="signInForm"
        >
          <ErrorLabel message={error ? error.message : ""} />
          <TextFieldFormsy
            className="w-full mb-4 mt-2"
            type="text"
            name="email"
            label="Email"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon className="text-20" color="action" />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText=""
            required
          />

          <TextFieldFormsy
            className="w-full mb-4"
            type="password"
            name="password"
            label="Password"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon className="text-20" color="action" />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText=""
            required
          />

          <div className="buttonsHolder">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full logInBtn"
              aria-label="LOG IN"
              value="legacy"
              id="btnFormSignIn"
              onClick={this.handleSubmit}
            >
              Log In
            </Button>

            <div>- or -</div>

            <div className="socialButtonsHolder">
              <FacebookLogin
                appId="1413036465538715"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                size="small"
              />

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className="w-full btnGoogle"
                  aria-label="LOG IN"
                  value="legacy"
                  id="btnGoogle"
                  onClick={this.handleSubmit}
                >
                  Login with Google
                </Button>
              </div>
            </div>
          </div>
        </Formsy>
      </div>
    );
  }
}

function mapStateToProps({ customer }) {
  return {
    login: customer.login
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { loginCustomer: loginAction, socialLoginCustomer: socialLoginAction },
    dispatch
  );
export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(LoginForm)
  )
);
