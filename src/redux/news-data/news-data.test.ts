import { initialNewsData } from "../../utils/data/data";
import newsDataReducer, { addNews, searchNews } from "./news-data.slice";

describe("newsDataSlice", () => {
  test('should add news with "addNews" action', () => {
    const action = {
      type: addNews.type,
      payload: {
        date: "2022-07-06",
        name: "Новая Новость",
      },
    };

    const result = newsDataReducer(
      {
        newsList: initialNewsData,
        newsListCopy: initialNewsData,
      },
      action
    );

    expect(result.newsList[0]).toStrictEqual({
      date: "2022-07-06",
      name: "Новая Новость",
    });
    expect(result.newsList.length).toBe(11);
    expect(result.newsListCopy.length).toBe(11);
  });

  test('should search news with "searchNews" action', () => {
    const action = {
      type: searchNews.type,
      payload: "Ученые",
    };

    const result = newsDataReducer(
      {
        newsList: initialNewsData,
        newsListCopy: initialNewsData,
      },
      action
    );

    expect(result.newsList.length).toBe(1);
    expect(result.newsListCopy.length).toBe(10);
    expect(result.newsList[0].name).toBe(
      "Ученые обнаружили новую разновидность касаток"
    );
  });
});
