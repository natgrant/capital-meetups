import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import { getEventsByCreatorAction } from "../actions/getEventsByCreatorAction";
import EventForm from "./EventForm";
import Loading from "./Loading";
import { ENETDOWN } from "constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getAll(this.props.user.user_name),
      this.props.getEventsByCreator(this.props.user.user_id);
  };

  render() {
    return (
      <div>
        <h2>Welome to Dashboard page!</h2>
        {this.props.subscriptions.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.location}</p>
            <p>{item.date}</p>
          </div>
        ))}
        <h1>Create Event</h1>
        <EventForm />

        <div>
          <h1>SHOW ALL CREATED EVENTS</h1>
          {this.props.events.map(event => (
            <div>
              <p>{event.name}</p>
              <p>{event.describtion}</p>
              <p>{event.location}</p>
              <p>{event.date}</p>
              <button>Edit event</button>
              <button>Delete event</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.subscriptions.subscriptionData,
  user: state.auth.user,
  events: state.home.events
});

const mapDispatchToProps = dispatch => {
  return {
    getAll: username => dispatch(getAllSubscriptions(username)),
    getEventsByCreator: userId => dispatch(getEventsByCreatorAction(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
