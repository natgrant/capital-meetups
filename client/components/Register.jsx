import React from "react";
import { connect } from "react-redux";
import { registerUserRequest } from "../actions/register";
import { loginError } from "../actions/login";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      contact_details: "",
      email_address: "",
      password: "",
      confirm_password: ""
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loginError(""));
  }
  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit(e) {
    e.preventDefault();
    e.target.reset();
    let {
      user_name,
      password,
      confirm_password,
      contact_details,
      email_address
    } = this.state;
    if (confirm_password != password)
      return this.props.dispatch(loginError("Passwords don't match"));
    this.props.dispatch(registerUserRequest(this.state));
  }
  render() {
    const { auth } = this.props;
    return (
      <form className="hero" onSubmit={this.submit}>
        <div className="hero-body">
          <h1 className="title is-2 login-text">Register</h1>
          {auth.errorMessage && (
            <span className="has-text-danger is-large">
              {auth.errorMessage}
            </span>
          )}
          <label className=" is-6 is-offset-one-quarter label is-large login-text is-fullwidth">
            Username
            <input
              required
              className="input is-medium  has-text-centered is-fullwidth"
              placeholder="User Name"
              type="text"
              name="user_name"
              onChange={this.updateDetails}
            />
          </label>
          <div className="">
            <label className=" is-6 label is-large login-text">
              Contact Details
              <input
                required
                className="input is-medium  has-text-centered is-fullwidth"
                placeholder="Contact Details"
                type="text"
                name="contact_details"
                onChange={this.updateDetails}
              />
            </label>
            <label className=" is-6 label is-large login-text">
              Email Address
              <input
                required
                className="input is-medium has-text-centered is-fullwidth"
                placeholder="Email Adress"
                type="text"
                name="email_address"
                onChange={this.updateDetails}
              />
            </label>
          </div>
          <br />
          <div className="">
            <label className=" is-6 label is-large login-text">
              Password
              <input
                required
                className="input is-medium has-text-centered is-fullwidth"
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.updateDetails}
              />
            </label>
            <label className=" is-6 label is-large login-text">
              Confirm Password
              <input
                required
                className="input is-medium has-text-centered is-fullwidth"
                placeholder="Confirm Password"
                type="password"
                name="confirm_password"
                onChange={this.updateDetails}
              />
            </label>
          </div>
          <br />
          <input
            className="button is-primary is-large is-fullwidth"
            value="Register"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Register);
