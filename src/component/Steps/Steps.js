import Step from "./Step/Step";
import "./Steps.css";

const Steps = (props) => {
  const allSteps = [];
  for (let i = 1; i <= props.size; i++) {
    let classes =
      i < props.current ? "completed" : i === props.current ? "active" : null;
    allSteps.push(
      <Step key={i} id={i} classes={classes} onClick={props.onClick} />
    );
  }
  return <div className="stepper-wrapper">{allSteps}</div>;
};

export default Steps;
