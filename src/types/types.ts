export interface INewsData {
    date: string;
    name: string;

}

export interface INewsList {
    newsList: INewsData[];
}

export type IpropertyNews = [keyof INewsData, keyof INewsData]