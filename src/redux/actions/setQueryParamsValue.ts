import { SET_QUERY_PARAMS_VALUE } from "../types";

export const setQueryParamsValue = (data: {}) => (dispatch: any) => {
  return dispatch({
    type: SET_QUERY_PARAMS_VALUE,
    payload: data,
  });
};
