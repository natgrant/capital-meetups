import React from "react";
import Nav from "./Nav";
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
      <React.Fragment>
        <Nav />
        <div className="has-text-centered">
          <div className="hero is-large is-bold header-image">
            <div className="hero-body has-text-centered">
              <Link to="/" className="">
                <h1 className="title header-title">CAPITAL MEETUPS</h1>
              </Link>
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

          <div className="columns ">
            <div className="column ">
              <h2 className=" is-size-3 ">
                <strong>Suggested Categories</strong>
              </h2>
            </div>
          </div>
          <CategoryList />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
