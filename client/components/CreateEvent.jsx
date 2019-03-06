import React from "react";
import EventForm from "./EventForm";
import { connect } from "react-redux";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ visible: true });
  }

  changeButtonState(event) {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <a
          className="button is-large is-primary is-rounded"
          onClick={this.handleClick}
        >
          Create Event &nbsp; <i class="fas fa-plus" />
        </a>
        {this.state.visible && (
          <EventForm
            {...this.props}
            buttonClick={this.changeButtonState.bind(this)}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    events: state.home.events
  };
}

export default connect(mapStateToProps)(CreateEvent);
