import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getEvent } from "../actions/events";

export class EventInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        <div>
          <div>
            <section className="hero is-primary">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">{events.name}</h1>
                  <div>
                    <a className="button is-danger joinbutton">Join</a>
                  </div>
                </div>
              </div>
            </section>
            <figure className="image is-50x50 eventimage">
              <img src="/images/coffee.jpg" />
            </figure>
          </div>
          <div className="tile is-parent basicdetails">
            <article className="tile is-classNamehild box">
              <div className="content">
                <p className="title">
                  Hello
                  {/* event date/time & host */}
                  {this.props.date}
                  {this.props.type}
                  {this.props.created_by}
                  {this.props.category}
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent description">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Description</p>

              <p className="subtitle">
                {/* description */}
                {this.props.description}
              </p>

              <div className="content" />
            </div>
          </article>
        </div>
        <div className="tile is-parent locationtile">
          <div className="tile is-child box">
            <p className="title">Location</p>

            {/* <p> */}

            {/* location */}
            {/* {this.props.location} */}

            {/* </p> */}
          </div>
        </div>
        <div>
          <div>
            {/* Attendee Panel */}

            <nav className="panel attendeepanel">
              <p className="panel-heading">Members</p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="search"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                </p>
              </div>
              <p className="panel-tabs">
                <a className="is-active">Attendees</a>
              </p>
              <a className="panel-block is-active">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true" />
                </span>
                Tom
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true" />
                </span>
                Lisa
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true" />
                </span>
                Mark
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true" />
                </span>
                Bob
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-code-branch" aria-hidden="true" />
                </span>
                Alice
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-code-branch" aria-hidden="true" />
                </span>
                Sarah
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.home.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => {
      return dispatch(getEvent(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventInfo);
