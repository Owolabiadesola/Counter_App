import React, { Component } from "react";

export default class DecrementCounter extends Component {
  constructor() {
    super();
    this.state = {
      decrementcounter: 0,
    };
  }
  decrement() {
    this.setState({
      decrementcounter: (this.state.decrementcounter =
        this.state.decrementcounter - 5),
    });
    console.log(this.state.decrementcounter);
  }

  render() {
    return (
      <div>
        <h1> Count - {this.state.decrementcounter} </h1>
        <button
          style={{
            border: "1px solid ",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          onClick={() => this.decrement()}
        >
          Decrement Button
        </button>
      </div>
    );
  }
}
