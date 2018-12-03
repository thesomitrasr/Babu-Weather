import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 9
  };
  handle = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let badg = "badge m-2 badge-";
    badg += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <h1 className={badg}>{this.format()}</h1>
        <button onClick={this.handle}>incre</button>
      </div>
    );
  }
  format() {
    const { count } = this.state;
    return count === 10 ? "babu" : count;
  }
}

export default Counter;
