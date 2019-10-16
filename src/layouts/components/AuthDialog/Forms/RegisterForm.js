import React, { Component } from "react";
import { Button, InputAdornment, withStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signupAction } from "../../../../store/actions";
import PasswordIcon from "@material-ui/icons/VpnKey";
import NameIcon from "@material-ui/icons/Person";
import { TextFieldFormsy, ErrorLabel } from "../../../../components/Formsy";
import Formsy from "formsy-react";
import styles from "./styles";


class RegisterForm extends Component {
  form = React.createRef();
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    const { signupCustomer, } = this.props;
    const { email, password, name, confirmPassword } = this.state;
    if (password === confirmPassword){
        const data = { email, password, name };
        signupCustomer(data);}
  };

  render() {
    const { error } = this.props.signup;
    const { password, confirmPassword } = this.state;
    return (
      <div className="w-full flex flex-row justify-center">
        <Formsy
          onValidSubmit={this.onSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          ref={form => (this.form = form)}
          className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
          id="registerForm"
        >
          <TextFieldFormsy
            className="w-full mb-4"
            type="text"
            name="name"
            label="Name"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <NameIcon className="text-20" color="action" />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText=""
            required
          />

          <TextFieldFormsy
            className="w-full mb-2 mt-2"
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
          <ErrorLabel
            message={error && error.field === "email" ? error.message : ""}
          />

          <TextFieldFormsy
            className="w-full mb-2 mt-2"
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
          <ErrorLabel
            message={error && error.field === "password" ? error.message : ""}
          />
          <TextFieldFormsy
            className="w-full mb-2 mt-2"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
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
          <ErrorLabel
            message={
              password && confirmPassword && password !== confirmPassword
                ? "The two passwords did not match!"
                : ""
            }
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mx-auto normal-case"
            aria-label="LOG IN"
            value="legacy"
            id="btnFormRegister"
            onClick={this.handleSubmit}
          >
            Register
          </Button>
        </Formsy>
      </div>
    )
  }
}

function mapStateToProps({ customer }) {
  return {
    signup: customer.signup
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ signupCustomer: signupAction }, dispatch);

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(RegisterForm)
  )
);
