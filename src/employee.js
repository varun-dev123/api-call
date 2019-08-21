import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import EmployeeDetail from "./employee/employeeDetail";
import EmployeeList from "./employee/employeeList";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/employee" component={EmployeeList} />
          <Route path="/employee/:id" component={EmployeeDetail} />
        </Switch>
      </div>
    );
  }
}

export default Employee;
