import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllEvents } from "../actions/events";
import { getAllCategories } from "../actions/events";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Categories from "./CatergoryPage";

export function App({ auth }) {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Categories} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </React.Fragment>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    events: () => dispatch(getAllEvents()),
    categories: () => dispatch(getAllCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
