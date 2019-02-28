import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";

export function App({ auth }) {
  return (
    <Router>
      <Fragment>
        {/* {!auth.isAuthenticated && <Route exact path="/" component={Login} />} */}
        <Route exact path="/" component={Nav} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Fragment>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
