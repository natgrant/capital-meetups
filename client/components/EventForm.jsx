import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import showResults from "../actions/showResults";
// import createEvent from "../a"
import DateTimePicker from "react-datetime-picker";
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

const RenderDateTimePicker = ({
  input: { onChange, value },
  label,
  showTime
}) => (
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
);
let EventForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(createEvent(values))}>
    <Field name="name" label="Event Name:" component={RenderInput} />
    <Field name="location" label="Event location:" component={RenderInput} />
    <Field name="category" label="Event category:" component={RenderSelect}>
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
      label="Event description:"
      rows="6"
      type="textarea"
      component={RenderInput}
    />
    <Field name="date" component={RenderDateTimePicker} />

    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>
);

EventForm = reduxForm({
  form: "event",
  destroyOnUnmount: false,
  validate
})(EventForm);
export default EventForm;
