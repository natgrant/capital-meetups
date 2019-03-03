import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import showResults from "../actions/showResults";
// import DateTimePicker from "react-datetime-picker";
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.location) {
    errors.location = "Required";
  }
  if (!values.category) {
    errors.category = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.date) {
    errors.datetime = "Required";
  }
  return errors;
};

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? "error" : "",
      meta.active ? "active" : ""
    ].join(" ")}
  >
    <label>{label}</label>
    {render(input, label, rest)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} />
));

const RenderSelect = createRenderer((input, label, { children }) => (
  <select {...input}>{children}</select>
));

// const RenderDateTimePicker = ({input:{onChange, value}, label,showTime}) => (
//   <DateTimePicker onChange ={onChange} format="DD MMM YYYY" time={showTime} value={!calue? null: new Date(value)}/>
// );
let EventForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(showResults)}>
    <Field name="name" label="Event Name" component={RenderInput} />
    <Field name="location" label="Event location" component={RenderInput} />
    <Field name="category" label="Event category" component={RenderSelect}>
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
        "music"
      ].map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Field>

    <Field
      name="description"
      label="Event description"
      rows="6"
      component={RenderInput}
    />
    {/* <DateTimePicker
      name="date"
      label="Event date"
      showTime={true}
      component={RenderDateTimePicker}
    /> */}

    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>
);

// let EventForm = ({ handleSubmit, submitting }) => (
//   <form onSubmit={handleSubmit(showResult)}>
//     <div>
//       <label>Event name:</label>
//       <Field name="name" component="input" />
//     </div>
//     <div>
//       <label>Event location:</label>
//       <Field name="location" component="input" />
//     </div>

//     <div>
//       <label>Event category:</label>
//       <Field name="category" component="select">
//         {[
//           "coffee",
//           "arts and crafts",
//           "mountain biking",
//           "health",
//           "outdoors",
//           "food",
//           "language",
//           "web development",
//           "music"
//         ].map(item => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </Field>
//     </div>
//     <div>
//       <label>Event description:</label>
//       <Field name="description" component="textarea" rows="5" />
//     </div>

//     <div>
//       <label>Event date:</label>
//       <Date Picker name="date" />
//     </div>
//     <button type="submit" disabled={submitting}>
//       submit
//     </button>
//   </form>
// );

EventForm = reduxForm({
  form: "event",
  destroyOnUnmount: false,
  validate
})(EventForm);
export default EventForm;
