import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 2 }
    ]
  };
  incrementHandler = counter => {
    const countersTemp = [...this.state.counters];
    const index = countersTemp.indexOf(counter);
    countersTemp[index].value++;
    this.setState({ counters: countersTemp });
  };

  resetHandler = () => {
    const countersTemp = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: countersTemp });
  };

  deleteHandler = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.resetHandler}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
