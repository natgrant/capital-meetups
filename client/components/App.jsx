import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import LatestEvents from "./LatestEvents";
import CategoryList from "./CategoryList";

export function App({ auth }) {
  return (
    <Router>
      <div className="container has-text-centered">
        <div className="hero is-small is-primary has-background-success	">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 className="title is-1">Meet-Ups</h1>
            </Link>
            <Nav />
          </div>
        </div>
        <div className="columns ">
          <div className="column" />
        </div>
        <div className="columns ">
          <div className="column" />
        </div>
        <div className="columns ">
          <div className="column ">
            <div />
            <h2 className=" is-size-3 ">
              <strong>Latest events near you</strong>
            </h2>
          </div>
        </div>
        <LatestEvents />
        <div className="">
          {/* {!auth.isAuthenticated && <Route exact path="/" component={Login} />} */}
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>

        <div className="columns ">
          <div className="column ">
            <h2 className=" is-size-3 ">
              <strong>Categories</strong>
            </h2>
          </div>
        </div>
        <CategoryList />
      </div>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
