import "./Step.css";

const Step = (props) => {
  return (
    <div className={`stepper-item ${props.classes}`}>
      <div className="step-counter" onClick={(e) => props.onClick(e)}>
        {props.id}
      </div>
    </div>
  );
};

export default Step;
