import React, { Component } from "react";
import { connect } from "react-redux";
class Categories extends Component {
  constructor() {
    super();
    this.state = {
      event: []
    };
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <section className="hero is-primary">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title categorytitle">
                    Whatever the Catergory is
                  </h1>
                  <div />
                </div>
              </div>
            </section>

            <div class="columns">
              <div class="column is-four-fifths">Catergory</div>
              <div class="column">joinbutton</div>
            </div>
            <div class="columns">
              <div class="column is-four-fifths">Catergory</div>
              <div class="column">joinbutton</div>
            </div>
            <div class="columns">
              <div class="column is-four-fifths">Catergory</div>
              <div class="column">joinbutton</div>
            </div>
            <div class="columns">
              <div class="column is-four-fifths">Catergory</div>
              <div class="column">joinbutton</div>
            </div>
            <div class="columns">
              <div class="column is-four-fifths">Catergory</div>
              <div class="column">joinbutton</div>
            </div>
          </div>
        </div>
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

// export default Categories;
