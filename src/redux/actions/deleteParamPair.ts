import { REMOVE_PARAM_PAIR } from "../types";

export const deleteParamPair =
  (data = {}) =>
  (dispatch: any) => {
    return dispatch({
      type: REMOVE_PARAM_PAIR,
      payload: data,
    });
  };
