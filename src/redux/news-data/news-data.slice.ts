import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsListSlice, INewsData } from "../../types/types";
import { initialNewsData } from "../../utils/data/data";

const newsDataSlice = createSlice({
  name: "newsData",
  initialState: {
    newsList: initialNewsData,
    newsListCopy:initialNewsData,
  } as INewsListSlice,
  reducers: {
    addNews(state, action: PayloadAction<INewsData>) {
      state.newsList = [...state.newsList, action.payload];
      state.newsListCopy = [...state.newsListCopy, action.payload];
    },
    searchNews(state, action: PayloadAction<string>) {
      state.newsList = state.newsListCopy.filter(elem => elem.name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  }
});

export default newsDataSlice.reducer;
export const { addNews, searchNews } = newsDataSlice.actions;