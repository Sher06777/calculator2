import React, { Component } from "react";

class Multiply extends Component {
  render() {
    const { input1, input2, result, setResult } = this.props;

    const multiply = () => {
      setResult(+input1 * input2);
    };

    return (
      <div>
        <button onClick={multiply}>*</button>
      </div>
    );
  }
}

export default Multiply;
