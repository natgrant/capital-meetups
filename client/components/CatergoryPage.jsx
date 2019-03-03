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
              <div class="column is-two-fifths">is-two-fifths</div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Two</p>
                <p class="subtitle">Subtitle</p>
                <a className="button is-danger joinbutton">Join</a>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Three</p>
                <p class="subtitle">Subtitle</p>
                <a className="button is-danger joinbutton">Join</a>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
                <a className="button is-danger joinbutton">Join</a>
              </article>
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
