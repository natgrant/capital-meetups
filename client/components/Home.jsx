import React, { Fragment } from "react";
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
              <strong>Popular Categories</strong>
            </h2>
            <CategoryList />
          </div>
          <a
            className="button is-rounded is-large is-warning is-outlined button-more"
            onClick={() => {
              window.location.hash = "#/categories";
            }}
          >
            More
          </a>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
