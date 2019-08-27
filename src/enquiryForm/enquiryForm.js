import React, { Component } from "react";

class EnquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      email: "",
      address: "",
      isFriendly: true
    };
  }

  handelChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };
  handelSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log("data", data);
    // const data = this.state;
    // const post = [];
    // const v = data.push(post);
    // console.log(v);
  };

  // addItem = () => {
  //   const post = [];
  //   post.push(data);
  //   console.log("data", this.post);
  // };

  render() {
    const { name, contact, isFriendly, address, email } = this.state;

    return (
      <div className="row">
        <div className="col-md-4">
          <h4>Enquiry Form</h4>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handelChange}
                name="name"
                value={this.state.name}
              />
              <p>{name}</p>
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                className="form-control"
                name="contact"
                onChange={this.handelChange}
              />
              <p>{contact}</p>
            </div>
            <div className="form-group">
              <label htmlFor="isFriendly">
                <input
                  type="checkbox"
                  name="isFriendly"
                  id="isFriendly"
                  className="mr-2"
                  checked={this.state.isFriendly}
                  onChange={this.handelChange}
                />
                IsFriendly
                {isFriendly === true ? <b> Yes</b> : <b> No</b>}
              </label>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                onChange={this.handelChange}
                className="form-control"
                name="email"
              />
              <p>{email}</p>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                className="form-control"
                name="address"
                onChange={this.handelChange}
              />
              <p>{address}</p>
            </div>
            <div className="form-group">
              <button
                onClick={this.handelSubmit}
                className="btn btn-info btn-block"
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>IsFriendly</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.isFriendly}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EnquiryForm;
