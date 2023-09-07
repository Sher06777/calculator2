import React, { Component } from "react";

class Power extends Component {
  render() {
    const { input1, input2, result, setResult } = this.props;

    const power = () => {
      setResult(Math.pow(+input1, input2));
    };

    return (
      <div>
        <button onClick={power}>xʸ</button>
      </div>
    );
  }
}

export default Power;
