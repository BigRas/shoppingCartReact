import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  //to see the life cylce of app
  componentDidMount() {
    console.log("Counters- Mounted");
  }
  componentDidUpdate(prevProps, PrevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", PrevState);
  }

  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    console.log("Counters-Rendered");
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          RESET
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
