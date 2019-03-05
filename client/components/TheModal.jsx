import React, { Component } from "react";
import { connect } from "react-redux";

export class TheModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isShowing) {
      return (
        <div>
          <div className="modal is-active">
            <div className="modal-background" />
            <div className="modal-content">
              <p>Hey</p>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={this.props.onHide}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TheModal;
