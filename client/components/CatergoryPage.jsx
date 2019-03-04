import React, { Component } from "react";
import { connect } from "react-redux";
class Categories extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.categories.map((category, i) => {
          return (
            <div key={i} className="columns">
              <div className="column">
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
