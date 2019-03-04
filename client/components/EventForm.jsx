import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import showResults from "../actions/showResults";
import { createEvent } from "../actions/createEvent";
import DateTimePicker from "react-datetime-picker";
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
//         "music"
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

// class EventForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       photo: {}
//     };
//   }
//   onChange = e => {
//     console.log("onChange", e);
//     this.setState({ [e.target.name]: e.target.value });
//     console.log("newstate", this.state);
//   };
//   handleSubmit = e => {
//     e.prevent.default();
//     const values = {
//       name: this.state.name,
//       photo: this.state.photo
//     };

//     console.log("handleSubmit log", values);
//     this.props.createEvent(this.props.user.user_id, values);
//   };
//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         // action="/upload"
//         // method="POST"
//         enctype="multipart/form-data"
//       >
//         <input onChange={this.onChange} type="text" name="name" id="name" />
//         <input onChange={this.onChange} type="file" name="photo" id="photo" />
//         <input onChange={this.onChange} type="submit" value="submit" />
//       </form>
//     );
//   }
// }

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    console.log(formData);
    this.props.createEvent(this.props.user.user_id, formData, config);

    // axios.post("/upload",formData,config)
    //     .then((response) => {
    //         alert("The file is successfully uploaded");
    //     }).catch((error) => {
    // });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} enctype="multipart/form-data">
        <h1>File Upload</h1>
        <input type="file" name="photo" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

// export default ReactUploadImage;
const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    createEvent: (userId, values) => dispatch(createEvent(userId, values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);

// EventForm = reduxForm({
//   form: "event",
//   destroyOnUnmount: false,
//   validate
// })(EventForm);
// export default EventForm;
