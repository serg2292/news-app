import { combineReducers } from "@reduxjs/toolkit";
import newsDataReducer from "./news-data/news-data.slice";
import usersAuthReducer from "./users-auth/users-auth.slice";

const rootReducer = combineReducers({
  newsList: newsDataReducer,
  usersAuth: usersAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
