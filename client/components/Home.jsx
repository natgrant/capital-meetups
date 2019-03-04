import React, { Fragment } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import LatestEvents from "./LatestEvents";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import Login from "./Login";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <div className="has-text-centered">
          <div className="hero is-large is-bold header-image">
            <div className="hero-body has-text-centered">
              <Link to="/" className="">
                <h1 className="title header-title">CAPITAL MEETUPS</h1>
              </Link>
            </div>
          </div>
          <div className="container">
            <h2 className="subtitle-home is-size-3 ">
              <strong>Latest Events</strong>
            </h2>
            <LatestEvents />
            <h2 className="subtitle-home is-size-3">
              <strong>Suggested Categories</strong>
            </h2>
            <CategoryList />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
