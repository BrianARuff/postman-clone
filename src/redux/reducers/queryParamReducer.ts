import {
  ADD_KEY_VALUE_TO_TOTAL,
  SET_QUERY_PARAMS_ID,
  SET_QUERY_PARAMS_KEY,
  SET_QUERY_PARAMS_VALUE,
  REMOVE_PARAM_PAIR,
} from "../types";

const initState = {
  keyValue: "",
  value: "",
  id: null,
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
    case SET_QUERY_PARAMS_ID:
      return {
        ...state,
        id: action.payload?.id,
      };
    case ADD_KEY_VALUE_TO_TOTAL:
      return {
        ...state,
        total: [
          ...state.total,
          { [state.keyValue]: state.value, id: state.id },
        ],
      };
    case REMOVE_PARAM_PAIR:
      return {
        ...state,
        total: state.total.filter((param: any) => param.id !== action.payload),
      };
    default:
      return state;
  }
};
