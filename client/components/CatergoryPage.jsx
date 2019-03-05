import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
class Categories extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <section class="hero categories-header">
          <div class="hero-body">
            <div class="container">
              <h1 className="is-1">Categories</h1>
            </div>
          </div>
        </section>
        <div className="columns category-main">
          <div className="column">
            {this.props.categories.map((category, i) => {
              return (
                <div className="container" key={i}>
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

export default connect(mapStateToProps)(Categories);
