import { SET_QUERY_TYPE, SET_SEARCH_ITEM } from "../types";

interface Action {
  type: string;
  payload: any;
}

const initState = {
  searchAddress: "",
  queryType: "GET",
};

export const searchReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case SET_SEARCH_ITEM:
      return {
        ...state,
        searchAddress: action.payload?.address,
      };
    case SET_QUERY_TYPE:
      return {
        ...state,
        queryType: action.payload.queryType,
      };
    default:
      return state;
  }
};
