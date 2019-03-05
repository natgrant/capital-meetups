import React from "react";
import EventForm from "./EventForm";
import { connect } from "react-redux";

class EditEvent extends React.Component {
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

  render() {
    return (
      <div>
        {this.state.visible && <EventForm />}
        <button onClick={this.handleClick}>edit</button>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     getEvent: id => {
//       return dispatch(getEvent(id));
//     },
//     getUsersByEvent: id => {
//       return dispatch(getUsersByEvent(id));
//     }
//   };
// };

export default connect(mapStateToProps)(EditEvent);
