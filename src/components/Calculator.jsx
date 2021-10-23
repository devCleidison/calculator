import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

function Calculator() {
  return (
    <div className="calculator-container">
      <Display />
      <Keyboard />
    </div>
  );
}

export default Calculator;
