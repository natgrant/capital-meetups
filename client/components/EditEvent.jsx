import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

class EditForm extends Component {
  //our other functions will go here

  render() {
    return <div>//our form will go here</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  actions
)(form(ReduxFormTutorial));
