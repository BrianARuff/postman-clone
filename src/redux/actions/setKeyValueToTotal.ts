import { ADD_KEY_VALUE_TO_TOTAL } from "../types";

export const setKeyValueToTotal =
  (data = {}) =>
  (dispatch: any) => {
    return dispatch({
      type: ADD_KEY_VALUE_TO_TOTAL,
      payload: data,
    });
  };
