import React from "react";
import { connect } from "react-redux";

class LatestEvents extends React.Component {
  constructor() {
    super();
    this.handleDate = this.handleDate.bind(this);
  }
  handleDate(date) {
    return new Date(date);
  }
  render() {
    return (
      <div className="columns ">
        {this.props.events.map(event => {
          return (
            <div className="column">
              <article class="message is-dark">
                <div className="message-header ">
                  <p>{event.name}</p>
                </div>
                <div className="message-body">
                  <p>Location:{event.location}</p>
                  <p>Date:</p>
                  <p>{event.description}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.home.events
  };
}

export default connect(mapStateToProps)(LatestEvents);
