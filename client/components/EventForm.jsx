import React from "react";
const axios = require("axios");
import { connect } from "react-redux";

import DateTimePicker from "react-datetime-picker";
import { getAllSubscriptions } from "../actions/getAllSubscriptions";
import { getEventsByCreatorAction } from "../actions/getEventsByCreatorAction";

class ReactUploadImage extends React.Component {
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
        alert("New event is created");
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
        <input type="text" name="name" onChange={this.onChangeNew} /> <br />
        <label>Event Location:</label>
        <input name="location" onChange={this.onChangeNew} /> <br />
        <label>Event Category:</label>
        <select name="category" onChange={this.onChangeNew}>
          <option />
          {[
            "Coffee",
            "Arts and Crafts",
            "Cycling",
            "Health",
            "Outdoors",
            "Food",
            "Plants",
            "Sport",
            "Language",
            "Web development",
            "Music",
            "Leisure"
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
const mapDispatchToProps = dispatch => {
  return {
    getAll: username => dispatch(getAllSubscriptions(username)),
    getEventsByCreator: userId => dispatch(getEventsByCreatorAction(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactUploadImage);

// import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { connect } from "react-redux";
// import showResults from "../actions/showResults";
// import { createEvent } from "../actions/createEvent";
// import DateTimePicker from "react-datetime-picker";
// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.location) {
//     errors.location = "Required";
//   }
//   if (!values.category) {
//     errors.category = "Required";
//   }

//   if (!values.description) {
//     errors.description = "Required";
//   }
//   // if (!values.date) {
//   //   errors.date = "Required";
//   // }
//   return errors;
// };

// const createRenderer = render => ({ input, meta, label, ...rest }) => (
//   <div
//     className={[
//       meta.error && meta.touched ? "error" : "",
//       meta.active ? "active" : ""
//     ].join(" ")}
//   >
//     <label>{label}</label>
//     {render(input, label, rest)}
//     {meta.error && meta.touched && <span>{meta.error}</span>}
//   </div>
// );

// const RenderInput = createRenderer((input, label) => (
//   <input {...input} placeholder={label} />
// ));

// const RenderSelect = createRenderer((input, label, { children }) => (
//   <select {...input}>{children}</select>
// ));

// const RenderDateTimePicker = ({
//   input: { onChange, value },
//   label,
//   showTime
// }) => (
//   <DateTimePicker
//     onChange={onChange}
//     format="DD MMM YYYY"
//     time={showTime}
//     value={!value ? null : new Date(value)}
//   />
// );

// let EventForm = ({ handleSubmit, submitting, user, createEvent }) => (
//   <form
//     onSubmit={handleSubmit(values => {
//       console.log(values, user.user_id, createEvent);
//       createEvent(user.user_id, values);
//     })}
//   >
//     <Field name="name" label="Event Name:" component={RenderInput} />
//     <Field name="location" label="Event location:" component={RenderInput} />
//     <Field name="category" label="Event category:" component={RenderSelect}>
//       <option />
//       {[
//         "coffee",
//         "arts and crafts",
//         "mountain biking",
//         "health",
//         "outdoors",
//         "food",
//         "language",
//         "web development",
//         "music",
//         "leisure"
//       ].map(item => (
//         <option key={item} value={item}>
//           {item}
//         </option>
//       ))}
//     </Field>

//     <Field
//       name="description"
//       label="Event description:"
//       rows="6"
//       type="textarea"
//       component={RenderInput}
//     />
//     <Field name="date" component={RenderDateTimePicker} />
//     <br />
//     <button type="submit" disabled={submitting}>
//       Submit
//     </button>
//   </form>
// );
// const mapStateToProps = state => ({
//   user: state.auth.user
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     createEvent: (user_id, values) => dispatch(createEvent(user_id, values))
//   };
// };

// EventForm = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EventForm);

// EventForm = reduxForm({
//   form: "event",
//   destroyOnUnmount: false,
//   validate
// })(EventForm);
// export default EventForm;
