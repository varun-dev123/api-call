import React, { Component } from "react";
import Counter from "./counter/counter";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 0 },
        { id: 4, value: 1 },
        { id: 5, value: 0 }
      ]
    };
  }

  handelDelete = counterId => {
    // console.log("The even11t will call here.", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //console.log(counters);
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    const counter = counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onDelete={this.handelDelete}
      />
    ));
    return (
      <div>
        <h1>About</h1>
        <p>Lore tis is about page</p>
        <button className="btn btn-dark btn-sm my-2">Reset</button>
        {counter}
      </div>
    );
  }
}

export default About;
