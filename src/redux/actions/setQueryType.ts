import { SET_QUERY_TYPE } from "../types";

export const setQueryType =
  (data = {}) =>
  (dispatch: any) => {
    return dispatch({
      type: SET_QUERY_TYPE,
      payload: data,
    });
  };
