import React, { Component } from "react";
import { connect } from "react-redux";

import { getEventsByCategory } from "../actions/getEventsByCategory";
import { getEvent } from "../actions/events";

export class EventsByCategory extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEventsByCategory(this.props.match.params.category);
  }

  handleDate = date => {
    return new Date(date).toString();
  };

  handleClick = id => {
    this.props.getEvent(id);
  };

  render() {
    return (
      <div>
        <section className="hero categories-header">
          <div className="hero-body">
            <div className="container">
              <h1 className="is-1">
                Events // {this.props.match.params.category}
              </h1>
            </div>
          </div>
        </section>

        <div className="events-page">
          <div className="columns events-column">
            {this.props.events.map(event => (
              <div className="card column" key={event.id}>
                <article className="message is-dark">
                  <div className="message-header">
                    <p>{event.name}</p>
                  </div>
                  <div className="message-body">
                    <figure>
                      <img alt="events-page" src={event.image} />
                    </figure>
                    <p>
                      <strong>Where: </strong>
                      {event.location}
                    </p>
                    <br />
                    <p>
                      <strong>When: </strong>
                      {this.handleDate(event.date)}
                    </p>
                    <br />
                    <p>
                      <strong>What: </strong>
                      {event.description}
                    </p>
                  </div>
                  <a
                    className="button is-rounded is-primary is-outlined event-icon"
                    value={event.id}
                    onClick={() => {
                      this.handleClick(event.id);
                      window.location.hash = `#/eventinfo/${event.id}`;
                    }}
                  >
                    Check out event
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.home.selectedEventsByCategory
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getEventsByCategory: category => dispatch(getEventsByCategory(category)),
    getEvent: id => dispatch(getEvent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsByCategory);
