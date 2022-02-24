import "./Card.css";
import * as labels from "../../assets/labels";

const Card = (props) => {
  const onClick = (event) => {
    props.onClickHandler({
      value: props.elementId,
      key: props.parent,
    });
  };
  const baseLabel = props.elementId.toUpperCase();
  let classes = ["card"];
  if (props.selected) classes.push("selected");
  return (
    <div className={classes.join(" ")} onClick={(e) => onClick(e)}>
      <div className={`${props.elementId}Icon`} />
      <h3>{labels[`${baseLabel}_HEADING`]}</h3>
      <p>{labels[`${baseLabel}_CONTENT`]}</p>
    </div>
  );
};

export default Card;
