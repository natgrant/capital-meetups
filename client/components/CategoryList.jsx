import React from "react";
import { connect } from "react-redux";

class CategoryList extends React.Component {
  constructor() {
    super();
  }

  routeChange = () => {
    let path = "#/category";
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="columns">
        {this.props.categories.map((category, i) => {
          if (i % 2 == 0) {
            return (
              <div className="column category-cont" onClick={this.routeChange}>
                <figure className="image is-256x256 is-inline-block category-image">
                  <img className="img-radius" src={category.image} />
                  <h3 className="category-text">
                    <span>{category.category}</span>
                  </h3>
                </figure>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.home.categories
  };
}

export default connect(mapStateToProps)(CategoryList);
