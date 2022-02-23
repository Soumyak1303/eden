const elements = {
  step1: {
    fullName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Full Name",
      },
      label: "Full Name",
      value: "",
      children: null,
    },
    displayName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Display Name",
      },
      value: "",
      label: "Display Name",
      children: null,
    },
  },
  step2: {
    workspaceName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Workspace Name",
      },
      label: "Workspace Name",
      value: "",
      children: null,
    },
    workspaceURL: {
      elementType: "inlineCombiner",
      children: {
        urlStaticLabel: {
          elementType: "staticLabel",
          value: "www.eden.com/",
          children: null,
        },
        url: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Workspace URL",
          },
          value: "",
          children: null,
        },
      },
      label: `URL <span style="color:#959292;">(Optional)</span>`,
    },
  },
  step3: {
    usageType: {
      elementType: "inlineCombiner",
      children: {
        myself: {
          elementType: "card",
          children: null,
        },
        team: {
          elementType: "card",
          children: null,
        },
      },
    },
  },
  step4: {},
};

export default elements;
