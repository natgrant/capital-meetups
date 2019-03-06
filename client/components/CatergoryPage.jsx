import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getEventsByCategory } from "../actions/getEventsByCategory";

export class Categories extends Component {
  constructor() {
    super();
  }

  handleClick = category => {
    this.props.getEventsByCategory(category);
  };

  render() {
    return (
      <Fragment>
        <section className="hero categories-header">
          <div className="hero-body">
            <div className="container">
              <h1 className="is-1">Categories</h1>
            </div>
          </div>
        </section>
        <div className="columns category-main">
          <div className="column">
            {this.props.categories.map((category, i) => {
              return (
                <div
                  className="container"
                  key={i}
                  value={category}
                  onClick={() => {
                    this.handleClick(category.category);
                    window.location.hash = `#/events/${category.category}`;
                  }}
                >
                  <div className="categories-page-img">
                    <figure className="image">
                      <div href="">
                        <img className="cat-img" src={category.image} />
                        <h3 className="category-text has-text-centered ">
                          <span>{category.category}</span>
                        </h3>
                      </div>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.home.categories
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getEventsByCategory: category => {
      dispatch(getEventsByCategory(category));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
