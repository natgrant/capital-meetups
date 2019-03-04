import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  constructor() {
    super();
  }

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
                  onClick={() => {
                    window.location.hash = "#/categories";
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

export default connect(mapStateToProps)(CategoryList);
