import { SET_JSON_DATA } from "../types";

export const setJsonData = (data: any) => (dispatch: any) => {
  return dispatch({
    type: SET_JSON_DATA,
    payload: data,
  });
};
