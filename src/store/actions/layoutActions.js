import * as actionTypes from "./actionTypes";

export const changeValue = (payload) => {
  return {
    type: actionTypes.CHANGE_VALUE,
    payload: {
      key: payload.key,
      value: payload.value,
    },
  };
};
