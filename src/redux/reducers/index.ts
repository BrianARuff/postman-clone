import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { queryParamReducer } from "./queryParamReducer";
import { JSONDataReducer } from "./JSONDataReducer";

const reducers = combineReducers({
  searchReducer,
  queryParamReducer,
  JSONDataReducer,
});

export default reducers;
