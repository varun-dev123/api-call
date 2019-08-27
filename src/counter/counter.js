import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.counter.value
    };
  }

  countHandler = () => {
    //console.log(product);
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    //console.log("props", this.props);
    return (
      <div>
        <h3>
          <span className={this.getStatus()}>{this.countChanger()}</span>
          <button
            className="btn btn-success btn-sm"
            onClick={() => this.countHandler()}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm ml-4"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </h3>
      </div>
    );
  }

  countChanger() {
    const { value } = this.state;
    return value === 0 ? "0" : value;
  }

  getStatus() {
    let getStatus = "mr-3 badge badge-";
    getStatus += this.state.value === 0 ? "warning" : "info";
    return getStatus;
  }
}

export default Counter;
