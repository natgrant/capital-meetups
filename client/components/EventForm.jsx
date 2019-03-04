import React from "react";
const axios = require("axios");

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: null,
      desc: null
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

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    console.log("test1", formData);
    console.log("test2", config);
    axios
      .post("/api/v1/meetups/event/photo", formData, config)
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
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="photo" onChange={this.onChange} />
        <input type="text" name="name" onChange={this.onChangeNew} />

        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default ReactUploadImage;
