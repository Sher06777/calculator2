import React, { useState } from "react";
import Plus from "./Btns/Plus";
import Minus from "./Btns/Minus";
import Input1 from "./Inputs/Input1";
import Input2 from "./Inputs/Input2";
import Multiply from "./Btns/Multiply";
import Divide from "./Btns/Divide";
import Root from "./Btns/Root";
import Power from "./Btns/Power";
import './style.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('')
  return (
    <div className="App">
      <div className="inputs">
        <Input1 setInput1={setInput1} />
        <div className="btns">
          <Plus input1={input1} input2={input2} setResult={setResult} />
          <Minus input1={input1} input2={input2} setResult={setResult} />
          <Multiply input1={input1} input2={input2} setResult={setResult} />
          <Divide input1={input1} input2={input2} setResult={setResult} />
          <Root input1={input1} input2={input2} setResult={setResult} />
          <Power input1={input1} input2={input2} setResult={setResult} />
        </div>
        <Input2 setInput2={setInput2} />
      </div>

      <div className="result"><input type="text" value={result} /></div>
    </div>
  );
}

export default App;
