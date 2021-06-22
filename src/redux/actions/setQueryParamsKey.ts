import { SET_QUERY_PARAMS_KEY } from "../types";

export const setQueryParamsKey =
  (data = {}) =>
  (dispatch: any) => {
    return dispatch({
      type: SET_QUERY_PARAMS_KEY,
      payload: data,
    });
  };
