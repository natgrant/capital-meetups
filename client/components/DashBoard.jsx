import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import EventForm from "./EventForm";
import Loading from "./Loading";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getAll(this.props.user.user_name);
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.subscriptions.subscriptionData,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    getAll: username => dispatch(getAllSubscriptions(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
