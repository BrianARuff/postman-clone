import { setKeyValueToTotal } from "../actions/setKeyValueToTotal";
import {
  ADD_KEY_VALUE_TO_TOTAL,
  SET_QUERY_PARAMS_KEY,
  SET_QUERY_PARAMS_VALUE,
} from "../types";

const initState = {
  keyValue: "",
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
        keyValue: action.payload?.keyValue,
      };
    case ADD_KEY_VALUE_TO_TOTAL:
      return {
        ...state,
        total: [...state.total, { [state.keyValue]: state.value }],
        keyValue: "",
        value: "",
      };
    default:
      return state;
  }
};
