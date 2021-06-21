import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { queryParamReducer } from "./queryParamReducer";

const reducers = combineReducers({
  searchReducer,
  queryParamReducer,
});

export default reducers;
