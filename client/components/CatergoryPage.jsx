import React, { Component } from "react";
import { connect } from "react-redux";
class Categories extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tile is-ancestor">
        {this.props.categories.map((category, i) => {
          return (
            <div key={i} className="tile">
              <div className="">
                <figure className="image">
                  <a href="">
                    <img className="" src={category.image} />
                  </a>
                  {category.category}
                </figure>
              </div>
            </div>
          );
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

export default connect(mapStateToProps)(Categories);
