import React, { Component, Fragment } from "react";
import Logo from "../../component/Logo/Logo";
import Steps from "../../component/Steps/Steps";
import Form from "../../component/Form/Form";
import onBoardView from "../../assets/views/onBoardView";
import ElementRenderer from "../Layout/ElementRendered";
import * as labels from "../../assets/labels";
import "./Onboard.css";
import { connect } from "react-redux";

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
    const isLastStep = size === this.state.current ? true : false;
    let heading = labels[`STEP${this.state.current}_HEADING`];
    const subHeading = labels[`STEP${this.state.current}_SUBHEADING`];

    heading = isLastStep
      ? heading.replace("{name}", this.props.userData.fullName)
      : heading;

    return (
      <Fragment>
        <Logo />
        <Steps
          size={size}
          current={this.state.current}
          onClick={this.onStepClick}
        />

        {isLastStep ? <div className="done"></div> : null}
        <h1 className="heading">{heading}</h1>
        <h2 className="subheading">{subHeading}</h2>

        <Form
          elements={elements}
          onSubmit={this.onSubmitHandler}
          submitButtonLabel={isLastStep ? "Launch Eden" : "Create Workspace"}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.layout.userData,
  };
};

export default connect(mapStateToProps)(Onboard);
