import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import EventInfo from "./EventInfo";

import Categories from "./CatergoryPage";

export function App({ auth }) {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Categories} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/EventInfo" component={EventInfo} />
      </React.Fragment>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
