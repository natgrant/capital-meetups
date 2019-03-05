import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import { getEventsByCreatorAction } from "../actions/getEventsByCreatorAction";
import { deleteEventAction } from "../actions/deleteEventAction";
import EventForm from "./EventForm";
import Loading from "./Loading";
import EditEvent from "./EditEvent";

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
        {this.props.subscriptions.map(subscription => (
          <div key={subscription.id}>
            <p>{subscription.name}</p>
            <p>{subscription.location}</p>
            <p>{subscription.date}</p>
            <button>Remove</button>
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
              {/* <button>Edit event</button> */}
              <EditEvent />
              <button
                onClick={e =>
                  window.confirm(
                    "Are you sure you wish to delete this event?"
                  ) && this.props.deleteEvent(event.id, this.props.user.user_id)
                }
              >
                Delete event
              </button>
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
    getEventsByCreator: userId => dispatch(getEventsByCreatorAction(userId)),
    deleteEvent: (eventId, userId) =>
      dispatch(deleteEventAction(eventId, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
