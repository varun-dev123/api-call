import React, { Component } from "react";

class EnquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      email: "",
      address: "",
      isFriendly: "",
      items: []
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
    const newItem = {
      name: this.state.name,
      contact: this.state.contact,
      email: this.state.email,
      address: this.state.address,
      isFriendly: this.state.isFriendly
    };

    this.setState({ items: [...this.state.items, newItem] });

    this.setState({
      name: "",
      contact: "",
      email: "",
      address: "",
      isFriendly: ""
    });
  };

  isFriendlyStatus() {
    const { isFriendly } = this.state;
    let colorStatus = "isFriendly ";
    colorStatus += isFriendly === true ? "yes" : "no";

    return colorStatus;
  }

  isFriendlyValue() {
    const { isFriendly } = this.state;
    return isFriendly === true ? "Yes" : "No";
  }

  render() {
    const { name, contact, isFriendly, address, email, items } = this.state;
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
              {/* <p>{name}</p> */}
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                className="form-control"
                name="contact"
                value={this.state.contact}
                onChange={this.handelChange}
              />
              {/* <p>{contact}</p> */}
            </div>
            <div className="form-group">
              <label htmlFor="isFriendly">
                <input
                  type="checkbox"
                  name="isFriendly"
                  id="isFriendly"
                  value={isFriendly === true ? "Yes" : "No"}
                  className="mr-2"
                  checked={this.state.isFriendly}
                  onChange={this.handelChange}
                />
                IsFriendly
              </label>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handelChange}
              />
              {/* <p>{email}</p> */}
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                type="text"
                className="form-control"
                name="address"
                value={this.state.address}
                onChange={this.handelChange}
              />
              {/* <p>{address}</p> */}
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
          <div className="card-block">
            <h1 className="title">{name}</h1>
            <p className="sub-title">{email}</p>
            <p className="sub-title">{contact}</p>
            <p>
              <span>{address}</span>
            </p>
            <p className={this.isFriendlyStatus()}>{this.isFriendlyValue()}</p>
            {/* {isFriendly === true ? (
              <span className="isFriendly yes">Yes</span>
            ) : (
              <span className="isFriendly no">No</span>
            )} */}
          </div>
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
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.contact}</td>
                  <td>{item.isFriendly === true ? "Yes" : "No"}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.address === "" ? (
                      <button className="btn btn-primary btn-sm">
                        Add Address
                      </button>
                    ) : (
                      item.address
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EnquiryForm;
