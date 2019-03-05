import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import { getEventsByCategory } from "../actions/getEventsByCategory";

class CategoryList extends Component {
  constructor() {
    super();
  }

  handleClick = category => {
    this.props.getEventsByCategory(category);
  };

  render() {
    return (
      <Fragment>
        <div className="columns">
          {this.props.categories.slice(0, 3).map((category, i) => {
            return (
              <div className="column">
                <div
                  key={i}
                  className="category-cont"
                  value={event.category}
                  onClick={() => {
                    this.handleClick(event.category);
                    window.location.hash = "#/events";
                  }}
                >
                  <figure className="image is-256x256 is-inline-block category-image">
                    <img className="img-radius" src={category.image} />
                    <h3 className="category-text">
                      <span>{category.category}</span>
                    </h3>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
        <div className="columns">
          {this.props.categories.slice(3, 6).map((category, i) => {
            return (
              <div className="column">
                <div
                  key={i}
                  className="category-cont"
                  onClick={() => {
                    window.location.hash = "#/category";
                  }}
                >
                  <figure className="image is-256x256 is-inline-block category-image">
                    <img className="img-radius" src={category.image} />
                    <h3 className="category-text">
                      <span>{category.category}</span>
                    </h3>
                  </figure>
                </div>
              </div>
            );
          })}
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
)(CategoryList);
