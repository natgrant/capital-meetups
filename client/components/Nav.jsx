import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/logout";
import Login from "./Login";
import Register from "./Register";
import { Modal } from "react-bulma-components";
import { Section } from "react-bulma-components";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: false,
      login: false,
      register: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }
  toggleBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }
  render() {
    const { auth, logout } = this.props;
    const { showBurger } = this.state;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Categories</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Events</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Join Event</a>
                <a className="navbar-item">Events Near You</a>
                <a className="navbar-item">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            {auth.isAuthenticated ? (
              <a
                to="/"
                className="navbar-item is-large"
                onClick={() => logout()}
              >
                Logout
              </a>
            ) : (
              [
                <div className="navbar-item">
                  <div className="buttons">
                    <a
                      onClick={() => this.setState({ register: true })}
                      className="button is-primary"
                    >
                      <strong>Sign up</strong>
                    </a>
                    <Modal
                      show={this.state.register}
                      onClose={() => this.setState({ register: false })}
                      style={{ backgroundColor: "black" }}
                    >
                      <Modal.Content>
                        <Section style={{ backgroundColor: "white" }}>
                          <Register />
                        </Section>
                      </Modal.Content>
                    </Modal>
                    <a
                      onClick={() => this.setState({ login: true })}
                      className="button is-light"
                    >
                      Log in
                    </a>
                    <Modal
                      show={this.state.login}
                      onClose={() => this.setState({ login: false })}
                      style={{ backgroundColor: "black" }}
                    >
                      <Modal.Content>
                        <Section style={{ backgroundColor: "white" }}>
                          <Login />
                        </Section>
                      </Modal.Content>
                    </Modal>
                  </div>
                </div>
              ]
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
