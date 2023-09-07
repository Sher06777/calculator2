import React, { Component } from "react";

class Root extends Component {
  render() {
    const { input1, input2, result, setResult } = this.props;

    const root = () => {
      setResult(Math.pow(input1, 1 / input2));
    };

    return (
      <div>
        <button onClick={root}>root</button>
      </div>
    );
  }
}

export default Root;
