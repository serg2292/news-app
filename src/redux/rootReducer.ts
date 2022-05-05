import { combineReducers } from "@reduxjs/toolkit";
import newsDataReducer from "./newsDataReducer/newsDataReducer";

const rootReducer = combineReducers({
  newsList: newsDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
