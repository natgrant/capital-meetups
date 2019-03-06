import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import { getEventsByCreatorAction } from "../actions/getEventsByCreatorAction";
import { deleteEventAction } from "../actions/deleteEventAction";
import { removeSubAction } from "../actions/removeSubAction";

import CreateEvent from "./CreateEvent";
import Loading from "./Loading";
import EditEvent from "./EditEvent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getAll(this.props.user.user_name);
    this.props.getEventsByCreator(this.props.user.user_id);
  };

  handleDate = date => {
    return new Date(date).toString();
  };

  render() {
    const { user_name } = this.props.user;
    return (
      <div>
        <section id="margin-dash" className="hero categories-header">
          <div className="hero-body">
            <div className="container">
              <h1 className="is-1">
                Hi, {user_name} welcome to your Dashboard!
              </h1>
            </div>
          </div>
        </section>
        <div className="dashboard">
          <div>
            <h1 className="title subs-title">Events You Created</h1>
          </div>
          <div className="create-btn is-pulled-right">
            <CreateEvent />
          </div>
          <div className="columns created-events">
            {this.props.events.map(event => (
              <div className="card column subs-event">
                <header className="card-header">
                  <p className="card-header-title">{event.name}</p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p>
                      <strong>Description: </strong> {event.description}
                    </p>
                    <p>
                      <strong>Location: </strong> {event.location}
                    </p>
                    <p>
                      <strong>Date: </strong>
                      {this.handleDate(event.date)}
                    </p>
                  </div>
                </div>
                <footer className="card-footer">
                  <div className="card-footer-item">
                    <EditEvent {...event} />
                    <button
                      className="button is-rounded is-danger"
                      onClick={e => {
                        window.confirm(
                          "Are you sure you wish to delete this event?"
                        ) &&
                          this.props.deleteEvent(
                            event.id,
                            this.props.user.user_id
                          );
                        this.props.getAll(this.props.user.user_name);
                      }}
                    >
                      Delete event &nbsp;
                      <i class="fas fa-trash-alt" />
                    </button>
                  </div>
                </footer>
              </div>
            ))}
          </div>
          <div className="joined-events">
            <h2 className="title subs-title">Attending Events</h2>
          </div>
          <div className="columns joined-events">
            {this.props.subscriptions.map(subscription => (
              <div className="card column is-one-quarter subs-event">
                <header className="card-header">
                  <p className="card-header-title">{subscription.name}</p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p>
                      <strong>Location: </strong> {subscription.location}
                    </p>
                    <p>
                      <strong>Date: </strong>
                      {this.handleDate(subscription.date)}
                    </p>
                  </div>
                </div>
                <footer className="card-footer">
                  <div className="card-footer-item">
                    <a
                      className="button is-rounded is-warning"
                      onClick={e =>
                        window.confirm(
                          "Are you sure you wish to remove this event?"
                        ) &&
                        this.props.removeSub(
                          this.props.user.user_id,
                          subscription.id,
                          this.props.user.user_name
                        )
                      }
                    >
                      Leave Event&nbsp;
                      <i className="fas fa-times" />
                    </a>
                  </div>
                </footer>
              </div>
            ))}
          </div>
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
      dispatch(deleteEventAction(eventId, userId)),
    removeSub: (userId, eventId, username) =>
      dispatch(removeSubAction(userId, eventId, username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
