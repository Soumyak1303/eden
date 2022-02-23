import React, { Component, Fragment } from "react";
import Logo from "../../component/Logo/Logo";
import Steps from "../../component/Steps/Steps";
import Form from "../../component/Form/Form";
import onBoardView from "../../assets/views/onBoardView";
import ElementRenderer from "../Layout/ElementRendered";
import * as labels from "../../assets/labels";
import "./Onboard.css";

class Onboard extends Component {
  state = {
    current: 1,
  };

  onStepClick = (e) => {
    this.setState({ current: Number(e.target.outerText) });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert("submited");
  };

  render() {
    const elements = (
      <ElementRenderer elements={onBoardView[`step${this.state.current}`]} />
    );
    const size = Object.keys(onBoardView).length;
    return (
      <Fragment>
        <Logo />
        <Steps
          size={size}
          current={this.state.current}
          onClick={this.onStepClick}
        />
        <h1 className="heading">
          {labels[`STEP${this.state.current}_HEADING`]}
        </h1>
        <h2 className="subheading">
          {labels[`STEP${this.state.current}_SUBHEADING`]}
        </h2>
        <Form elements={elements} onSubmit={this.onSubmitHandler} />
      </Fragment>
    );
  }
}

export default Onboard;
