import "./Form.css";
import Button from "../UI/Button/Button";

const Form = (props) => {
  return (
    <div className="form" onSubmit={props.onSubmit}>
      <form onSubmit={props.submitHandler}>
        {props.elements}
        <Button>Create Workspace</Button>
      </form>
    </div>
  );
};

export default Form;
