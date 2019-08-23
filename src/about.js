import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  countHandlerDec = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  countHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Lore tis is about page</p>
        <h3>
          <span className={this.getStatus()}>{this.countChanger()}</span>
          <button
            className="btn btn-success btn-sm"
            onClick={this.countHandlerDec}
          >
            Increment
          </button>
          <button
            className="ml-3 btn btn-danger btn-sm"
            onClick={this.countHandler}
          >
            Decrement
          </button>
        </h3>
      </div>
    );
  }

  countChanger() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getStatus() {
    let getStatus = "mr-3 badge badge-";
    getStatus += this.state.count === 0 ? "warning" : "success";
    return getStatus;
  }
}

export default About;
