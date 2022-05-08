import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsList, INewsData } from "../../types/types";

const newsDataSlice = createSlice({
  name: "newsData",
  initialState: {
    newsList: [
      {
        date: "01-10-2017",
        name: "Ученые обнаружили новую разновидность касаток"
      },
      {
        date: "05-10-2018",
        name:
          "В Перми закончилось строительство пешеходного перехода с 26 поворотами"
      }
    ]
  } as INewsList,
  reducers: {
    addNews(state, action: PayloadAction<INewsData>) {
      state.newsList = [...state.newsList, action.payload];
    }
  }
});

export default newsDataSlice.reducer;
export const { addNews } = newsDataSlice.actions;