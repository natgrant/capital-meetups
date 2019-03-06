import React from "react";
import EditEventForm from "./EditEventForm";
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

  changeButtonState(event) {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        {this.state.visible && (
          <EditEventForm
            {...this.props}
            buttonClick={this.changeButtonState.bind(this)}
          />
        )}
        <a className="button is-rounded is-info" onClick={this.handleClick}>
          Edit &nbsp;
          <i class="far fa-edit" />
        </a>
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

export default connect(mapStateToProps)(EditEvent);
