import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import Loading from "./Loading";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAu
    };
  }

  componentDidMount = () => {
    this.props.getAll(this.props.user.id);
  };

  getAll = () => {
    this.props.getAll(this.props.user.id);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Welome to Dashboard page!</h2>
        {/* {this.props.subscriptions.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.subscriptions,
  user: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getAll: id => dispatch(getAllSubscriptions(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
