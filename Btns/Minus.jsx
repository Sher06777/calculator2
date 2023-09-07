import React, { Component } from "react";

class Minus extends Component {
  render() {
    const { input1, input2, result, setResult } = this.props;

    const minus = () => {
      setResult(+input1 - input2);
    };

    return (
      <div>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default Minus;
