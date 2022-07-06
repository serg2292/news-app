import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsListSlice, INewsData } from "../../types/types";
import { initialNewsData } from "../../utils/data/data";
import { sortNews } from "../../utils/helpers/helpers";

const newsDataSlice = createSlice({
  name: "newsData",
  initialState: {
    newsList: sortNews(initialNewsData),
    newsListCopy: sortNews(initialNewsData),
  } as INewsListSlice,
  reducers: {
    addNews(state, action: PayloadAction<INewsData>) {
      state.newsList = [action.payload, ...state.newsList];
      state.newsListCopy = [action.payload, ...state.newsListCopy];
    },
    searchNews(state, action: PayloadAction<string>) {
      state.newsList = state.newsListCopy.filter(elem => elem.name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  }
});

export default newsDataSlice.reducer;
export const { addNews, searchNews } = newsDataSlice.actions;