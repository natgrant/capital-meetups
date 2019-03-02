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
            <div class="column">
              <figure class="image is-256x256 is-inline-block">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
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
