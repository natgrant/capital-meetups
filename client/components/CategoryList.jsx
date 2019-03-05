import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import { getEventsByCategory } from "../actions/getEventsByCategory";
import TheModal from "./TheModal";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      closeModal: true
    };
  }

  handleClick = category => {
    this.props.getEventsByCategory(category);
  };

  handleChange = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
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
                  value={category}
                  onClick={() => {
                    this.handleChange(
                      this.setState({
                        showModal: true
                      })
                    );
                    this.handleClick(category.category);
                  }}
                >
                  <TheModal
                    isShowing={this.state.showModal}
                    onHide={this.handleClose}
                  />
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
