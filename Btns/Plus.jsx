import React, { Component } from "react";

class Plus extends Component {
  render() {
    const { input1, input2, result, setResult } = this.props;

    const add = () => {
      setResult(+input1 + +input2);
    };

    return (
      <div>
        <button onClick={add}>+</button>
      </div>
    );
  }
}

export default Plus;
