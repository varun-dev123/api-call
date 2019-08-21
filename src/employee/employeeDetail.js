import React, { Component } from "react";

class EmployeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: "",
      isLoaded: false
    };
    console.log(props);
  }
  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    const api = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(api)
      .then(data => data.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }
  render() {
    //const { name, data } = this.state;
    const { error, isLoaded } = this.state;
    const {
      name,
      id,
      username,
      email,
      address,
      phone,
      website
    } = this.state.data;
    if (error) {
      return <p>Content not found</p>;
    } else if (!isLoaded) {
      return <p>Loading..</p>;
    } else {
      return (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>username</th>
                <th>email</th>
                <th>address</th>
                <th>phone</th>
                <th>website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                  {address.street}
                  <br />
                  {address.suite}
                </td>
                <td>{phone}</td>
                <td>{website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default EmployeeDetail;
