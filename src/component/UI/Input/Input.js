import React from "react";
import "./Input.css";

const input = (props) => {
  const inputChangeHandler = (event) => {
    props.onChangeHandler({
      value: event.target.value,
      key: props.elementId,
    });
  };
  const inputClasses = ["InputElement", props.elementId];

  return (
    <div className={`form-field ${props.elementType}`}>
      {props.label ? (
        <label
          className="Label"
          dangerouslySetInnerHTML={{ __html: props.label }}
        />
      ) : null}
      <input
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={(event) => inputChangeHandler(event)}
      />
    </div>
  );
};

export default input;
