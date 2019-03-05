import React, { Component } from "react";
import { connect } from "react-redux";

export class TheModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      closeModal: true
    };
  }

  render() {
    return (
      <div>
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-content">
            <p>Hey</p>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
      </div>
    );
  }
}

export default TheModal;
