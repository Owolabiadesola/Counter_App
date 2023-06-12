import React, { Component } from "react";

export default class IncrementCounter extends Component {
  constructor() {
    super();
    this.state = {
      incrementcounter: 0,
    };
  }
  increment() {
    this.setState({
      incrementcounter: (this.setState.incrementcounter =
        this.state.incrementcounter + 5),
    });
    console.log(this.state.incrementcounter);
  }
  render() {
    return (
      <div class="mx-5">
        <h1>Count - {this.state.incrementcounter}</h1>
        <button
          style={{
            border: "1px solid ",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          onClick={() => this.increment()}
        >
          Increment Button
        </button>
      </div>
    );
  }
}
