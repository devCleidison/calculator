import React from "react";

function Key(props) {
  if (
    props.name === "+" ||
    props.name === "-" ||
    props.name === "x" ||
    props.name === "/"
  ) {
    return <div className="keys key-operation key-container" onClick={calc}>{props.name}</div>;
  } else if (props.name === "=") {
    return <div className="keys key-result" onClick={calc}>{props.name}</div>;
  } else {
    return <div className="key-container keys" onClick={calc}>{props.name}</div>;
  }
}

function calc(props){
  const key = props.target.firstChild.data
  
  console.log(key)
}

export default Key;
