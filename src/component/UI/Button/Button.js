import React from "react";
import "./Button.css";

const button = (props) => (
  <div className={`btn-container ${props.disabled ? "disabled" : ""}`}>
    <button
      disabled={props.disabled}
      className={["Button form-btn", `${props.btnType}`].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
    <div className="tooltip">
      <i>i</i>
      <span>Please complete steps 1-3 to proceed.</span>
    </div>
  </div>
);

export default button;
