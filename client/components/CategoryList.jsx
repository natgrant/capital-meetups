import React from "react";
import { connect } from "react-redux";

class CategoryList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="columns ">
        {this.props.categories.map(category => {
          return (
            <div className="column">
              <figure className="image is-256x256 is-inline-block">
                <img className="is-rounded" src={category.image} />
                {category.category}
              </figure>
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

export default connect(mapStateToProps)(CategoryList);
