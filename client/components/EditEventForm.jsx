import React from "react";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import { getEventsByCreatorAction } from "../actions/getEventsByCreatorAction";
const axios = require("axios");
import { connect } from "react-redux";

import DateTimePicker from "react-datetime-picker";

class EditEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: null,
      date: new Date(),
      category: null,
      description: null,
      location: null,
      user: this.props.user.user_name
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeNew = this.onChangeNew.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.file);
    formData.append("name", this.state.name);
    formData.append("date", this.state.date);
    formData.append("category", this.state.category);
    formData.append("description", this.state.description);
    formData.append("location", this.state.location);
    formData.append("user", this.state.user);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    console.log("test1", formData);
    console.log("test2", config);
    axios
      .post(
        `/api/v1/meetups/event/photo/edit/${this.props.id}`,
        formData,
        config,
        this.props.user.user_id
      )
      .then(response => {
        alert("The file is successfully uploaded");
        this.props.getAll(this.props.user.user_name);
        this.props.getEventsByCreator(this.props.user.user_id);
        this.props.buttonClick();
      })
      .catch(error => {});
  }
  onChange(e) {
    console.log("event", e.target.files[0]);
    this.setState({ file: e.target.files[0] });
  }
  onChangeNew(e) {
    console.log("eventnew", event.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeDate = date => this.setState({ date });

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={this.props.name}
          onChange={this.onChangeNew}
        />
        <br />
        <label>Event Location:</label>
        <input
          name="location"
          defaultValue={this.props.location}
          onChange={this.onChangeNew}
        />
        <br />
        <label>Event Category:</label>
        <select
          name="category"
          defaultValue={this.props.category}
          onChange={this.onChangeNew}
        >
          <option />
          {[
            "coffee",
            "arts and crafts",
            "mountain biking",
            "health",
            "outdoors",
            "food",
            "language",
            "web development",
            "music",
            "leisure"
          ].map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>{" "}
        <br />
        <label>Event Description:</label>
        <input
          name="description"
          rows="6"
          type="textarea"
          defaultValue={this.props.description}
          onChange={this.onChangeNew}
        />
        <br />
        <label>Date & Time:</label>
        <DateTimePicker
          onChange={this.onChangeDate}
          name="date"
          value={this.state.date}
        />
        <br />
        <label>File Upload:</label>
        <input type="file" name="photo" onChange={this.onChange} />
        <br />
        <button type="submit">Submit</button>
        <button type="submit" onClick={this.props.buttonClick}>
          Cancel
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  events: state.home.events
});
const mapDispatchToProps = dispatch => {
  return {
    getAll: username => dispatch(getAllSubscriptions(username)),
    getEventsByCreator: userId => dispatch(getEventsByCreatorAction(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventForm);
