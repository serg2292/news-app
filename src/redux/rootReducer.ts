import { combineReducers } from "@reduxjs/toolkit";
import newsDataReducer from "./news-data/news-data.slice";

const rootReducer = combineReducers({
  newsList: newsDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
