import { SET_QUERY_PARAMS_ID } from "../types";

export const setQueryParamsId =
  (data = {}) =>
  (dispatch: any) => {
    return dispatch({
      type: SET_QUERY_PARAMS_ID,
      payload: data,
    });
  };
