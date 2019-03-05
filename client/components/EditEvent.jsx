import React from "react";
const axios = require("axios");
import { connect } from "react-redux";

import DateTimePicker from "react-datetime-picker";

class EditEvent extends React.Component {
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
    console.log();

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
        "/api/v1/meetups/event/photo",
        formData,
        config,
        this.props.user.user_id
      )
      .then(response => {
        alert("The file is successfully uploaded");
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
        <input type="text" name="name" onChange={this.onChangeNew} /> <br />
        <label>Event Location:</label>
        <input name="location" onChange={this.onChangeNew} /> <br />
        <label>Event Category:</label>
        <select name="category" onChange={this.onChangeNew}>
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
          onChange={this.onChangeNew}
        />{" "}
        <br />
        <label>Date & Time:</label>
        <DateTimePicker
          onChange={this.onChangeDate}
          name="date"
          value={this.state.date}
        />{" "}
        <br />
        <label>File Upload:</label>
        <input type="file" name="photo" onChange={this.onChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(EditEvent);
