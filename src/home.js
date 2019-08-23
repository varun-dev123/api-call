import React, { Component } from "react";
import Budget from "./home/budget";
import Customer from "./home/customer";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Thisi is shome apge </p>
        <p>
          <Link to="/home/customer">Customer</Link>
          <Link to="/home/budget">Employee</Link>
        </p>
        <div>
          <Switch>
            <Route exact path="/home/customer" component={Customer} />
            <Route exact path="/home/budget" component={Budget} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
