import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSubscriptions } from "../actions/getAllSubsriptions";
import Loading from "./Loading";

export class DashBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getAll();
  };

  getAll = () => {
    this.props.getAll();
  };
  render() {
    return (
      <div>
        {this.props.subscriptions.map(item => (
          <div>{subscriptions.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.subscriptions
});

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(getAllSubscriptions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
