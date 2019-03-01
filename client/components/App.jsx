import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import CategoryPage from "./CatergoryPage";

export function App({ auth }) {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={CategoryPage} />
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

export default connect(mapStateToProps)(App);
