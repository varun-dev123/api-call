import React, { Component } from "react";

class EnquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      email: "",
      address: "",
      value: ""
    };

    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4>Enquiry Form</h4>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handelChange}
                name="name"
                value={this.state.value}
              />
              <p>{this.state.value}</p>
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input type="text" className="form-control" name="contact" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" name="address" />
            </div>
            <div className="form-group">
              <button className="btn btn-info btn-block">Submit Details</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EnquiryForm;
