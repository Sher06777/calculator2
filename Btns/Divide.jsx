import React, { Component } from "react";

class Divide extends Component {
  render() {
    const { input1, input2, result, setResult } = this.props;

    const divide = () => {
      if (+input2 == 0) {
        setResult("Нельзя делить на ноль");
      } else {
        setResult(+input1 / input2);
      }    };

    return (
      <div>
        <button onClick={divide}>/</button>
      </div>
    );
  }
}

export default Divide;
