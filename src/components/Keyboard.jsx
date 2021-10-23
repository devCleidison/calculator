import React from "react";
import Key from "./Key";

function Keyboard() {
  const listKeys = [
    "C",
    "±",
    "%",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "x",
    "7",
    "8",
    "9",
    "/",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="keyboard-container">
      {listKeys.map((item, index) => (
        <Key name={item} key={index} />
      ))}
    </div>
  );
}

export default Keyboard;
