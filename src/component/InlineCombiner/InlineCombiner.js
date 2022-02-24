import ElementRenderer from "../../container/Layout/ElementRendered";
import "./InlineCombiner.css";

const InlineCombiner = (props) => {
  const elements = (
    <ElementRenderer
      elements={props.elementProps.children}
      parent={props.elementId}
    />
  );
  return (
    <div className="inlineCombiner">
      {props.elementProps.label ? (
        <label
          className="label"
          dangerouslySetInnerHTML={{ __html: props.elementProps.label }}
        />
      ) : null}
      <div className={`form-field-group ${props.elementId}`}>{elements}</div>
    </div>
  );
};

export default InlineCombiner;
