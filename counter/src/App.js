import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 2 }
    ]
  };

  constructor() {
    super();
    console.log("App-constructor");
  }
  componentDidMount() {
    console.log("App- Mounted");
  }

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
    console.log("App- Rendered");
    return (
      <main className="container">
        <NavBar
          totalNumber={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.deleteHandler}
          onReset={this.resetHandler}
          onIncrement={this.incrementHandler}
        />
      </main>
    );
  }
}

export default App;
