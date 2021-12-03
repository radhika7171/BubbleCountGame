import React from "react";
import "./Bubbles.css";

function Bubbles(props) {
  console.log("props", props);
  const styleObj = {
    color: "red",
  };
  return <div style={styleObj}>{props.s}</div>;
}

export default Bubbles;
