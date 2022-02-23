import "./Card.css";
import * as labels from "../../assets/labels";

const Card = (props) => {
  const baseLabel = props.elementId.toUpperCase();
  return (
    <div className="card">
      <div className={`${props.elementId}Icon`} />
      <h3>{labels[`${baseLabel}_HEADING`]}</h3>
      <p>{labels[`${baseLabel}_CONTENT`]}</p>
    </div>
  );
};

export default Card;
