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
    validations: {
      fullName: {
        required: true,
      },
      displayName: { required: true },
      workspaceName: { required: true },
      workspaceURL: null,
      usageType: { required: true },
    },
  };

  onStepClick = (e) => {
    this.setState({ current: Number(e.target.outerText) });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Done!");
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  };

  isFormValid = () => {
    const fields = this.state.validations;
    for (let field in fields) {
      if (!this.checkValidity(this.props.userData[field], fields[field])) {
        return false;
      }
    }
    return true;
  };

  render() {
    const elements = (
      <ElementRenderer elements={onBoardView[`step${this.state.current}`]} />
    );
    const size = Object.keys(onBoardView).length;
    const isFormValid = this.isFormValid();
    const isLastStep = size === this.state.current ? true : false;
    let heading = labels[`STEP${this.state.current}_HEADING`];
    let subHeading = labels[`STEP${this.state.current}_SUBHEADING`];

    if (isLastStep) {
      if (isFormValid) {
        heading = heading.replace("{name}", this.props.userData.fullName);
      } else {
        heading = null;
        subHeading = labels[`STEP${this.state.current}_INVALID_SUBHEADING`];
      }
    }

    let headings = (
      <Fragment>
        {heading ? <h1 className="heading">{heading}</h1> : null}
        <h2 className="subheading">{subHeading}</h2>
      </Fragment>
    );

    return (
      <Fragment>
        <Logo />
        <Steps
          size={size}
          current={this.state.current}
          onClick={this.onStepClick}
        />
        {isLastStep && isFormValid ? <div className="done"></div> : null}
        {headings}
        <Form
          elements={elements}
          onSubmit={this.onSubmitHandler}
          submitButtonLabel={isLastStep ? "Launch Eden" : "Create Workspace"}
          isFormValid={isFormValid}
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
