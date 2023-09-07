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
        <h1 style={{ color: "whitesmoke", textAlign: "center" }}>
          {" "}
          Count - {this.state.decrementcounter}{" "}
        </h1>
        <button
          style={{
            border: "5px lightblue solid ",
            borderRadius: "10px",
            backgroundColor: "white",
            width: "10rem",
            fontWeight: "500",
          }}
          onClick={() => this.decrement()}
        >
          Decrement Button
        </button>
      </div>
    );
  }
}
