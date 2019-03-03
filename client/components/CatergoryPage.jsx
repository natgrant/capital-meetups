import React, { Component } from "react";
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
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">One</p>
                  <p class="subtitle">Subtitle</p>
                  <a className="button is-danger joinbutton">Join</a>
                </article>
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
      </div>
    );
  }
}

export default Categories;
