import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getEvent } from "../actions/events";
import { getUsersByEvent } from "../actions/getUsersByEvent";
import { joinEventAction } from "../actions/JoinEventAction";

export class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      isButtonVisible: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isButtonVisible: false });
    }, 4000);
    this.props.getUsersByEvent(this.props.match.params.id),
      this.props.getEvent(this.props.match.params.id);
  }

  toggleTick = () => {
    this.setState({ buttonClicked: true });
    this.props.joinEvent(
      this.props.auth.user.user_id,
      this.props.selectedEvent.id
    );
  };

  handleDate = date => {
    return new Date(date).toString();
  };

  render() {
    const { selectedEvent, auth } = this.props;
    const { buttonClicked, isButtonVisible } = this.state;
    if (!auth.isAuthenticated && buttonClicked) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div>
          <div>
            <section className="hero categories-header">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title eventinfo-title">
                    {selectedEvent.name}
                  </h1>
                  <div>
                    <div>
                      {this.state.isButtonVisible && (
                        <a
                          className="button is-danger joinbutton"
                          onClick={() => {
                            this.state.isButtonVisible = false;
                            this.toggleTick;
                          }}
                        >
                          Join Event
                          <i className="fas fa-heart" />
                        </a>
                      )}
                      {buttonClicked && isButtonVisible ? (
                        <a className="button is-primary joinedbutton">
                          <i className="fas fa-plus" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="eventinfo-container">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <figure className="image-eventinfo">
                      <img src={selectedEvent.image} />
                    </figure>
                    <br />
                    <p className="title eventinfo-text">
                      <strong>Category </strong>
                      <i className="fas fa-arrow-right" />
                      <a className="cat-link-eventinfo" href={`#/categories`}>
                        {" "}
                        {selectedEvent.category}
                      </a>
                    </p>
                  </article>
                </div>
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification event-tile">
                        <p className="title eventinfo-text">
                          <strong>Description </strong>
                        </p>
                        <hr className="eventinfo-hr" />
                        <p>{selectedEvent.description}</p>
                        <br />
                      </article>
                      <article className="tile is-child notification event-tile">
                        <p className="title eventinfo-text">
                          <strong>Location</strong>
                        </p>
                        <hr className="eventinfo-hr" />
                        <p>{selectedEvent.location}</p>
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification event-tile">
                      <p className="title eventinfo-text">
                        <strong>Time</strong>
                      </p>
                      <hr className="eventinfo-hr" />
                      <p>{this.handleDate(selectedEvent.date)}</p>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent is-one-fifth ">
                  <article className="tile is-child notification">
                    <div className="content">
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
                          <a className="is-active">Going</a>
                        </p>
                        <a className="panel-block">
                          <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true" />
                          </span>
                          <ul>
                            {this.props.selectedEventUsers &&
                              this.props.selectedEventUsers.map(user => {
                                return <p key={user.name}>{user.name}</p>;
                              })}
                          </ul>
                        </a>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    selectedEvent: state.home.selectedEvent,
    selectedEventUsers: state.home.selectedEventUsers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => {
      return dispatch(getEvent(id));
    },

    getUsersByEvent: id => {
      return dispatch(getUsersByEvent(id));
    },
    joinEvent: (userId, eventId) => {
      return dispatch(joinEventAction(userId, eventId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventInfo);
