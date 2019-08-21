import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    const api = "https://jsonplaceholder.typicode.com/users";
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { data, error, isLoaded } = this.state;
    const employee = data.map(emp => (
      <li key={emp.id}>
        <Link to={`/employee/${emp.id}`}>{emp.name}</Link>
      </li>
    ));
    //console.log(employee);
    if (error) {
      return <p>Content not found</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else
      return (
        <div>
          <ul>{employee}</ul>
        </div>
      );
  }
}

export default EmployeeList;
