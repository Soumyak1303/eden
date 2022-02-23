import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userData: {
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    usageType: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      const { payload } = action;
      const { key, value, parent = "userData" } = payload;
      return {
        ...state,
        [parent]: {
          ...state[parent],
          [key]: value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
