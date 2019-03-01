import React from "react";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Home;
