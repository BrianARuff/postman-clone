import { SET_QUERY_PARAMS_KEY, SET_QUERY_PARAMS_VALUE } from "../types";

const initState = {
  key: "",
  value: "",
  total: [],
};

interface Action {
  type: string;
  payload: any;
}

export const queryParamReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case SET_QUERY_PARAMS_VALUE:
      return {
        ...state,
        value: action.payload?.value,
      };
    case SET_QUERY_PARAMS_KEY:
      return {
        ...state,
        key: action.payload?.key,
      };
    default:
      return state;
  }
};
