import { SET_JSON_DATA } from "../types";

const initState = {
  jsonData: "",
};

interface Action {
  type: string;
  payload: any;
}

export const JSONDataReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case SET_JSON_DATA:
      return {
        ...state,
        jsonData: action.payload.jsonData,
      };
    default:
      return state;
  }
};
