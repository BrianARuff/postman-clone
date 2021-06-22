import { SET_SEARCH_ITEM } from "../types";

export const setSearchItem =
  (data = {}) =>
  (dispatch: any) => {
    return dispatch({
      type: SET_SEARCH_ITEM,
      payload: data,
    });
  };
