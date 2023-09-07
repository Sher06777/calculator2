import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  change = (event) => {
    const { setInput1 } = this.props;
    const inputValue = event.target.value;
    this.setState({ inputValue });
    setInput1(inputValue);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          className="input1"
          value={inputValue}
          onChange={this.change}
        />
      </div>
    );
  }
}

export default Input;