export interface INewsData {
    date: string;
    name: string;

}

export interface INewsListSlice {
    newsList: INewsData[];
    newsListCopy:INewsData[];
}

export interface INewsListComponent {
    newsList: INewsData[];
}

export type IpropertyNews = [keyof INewsData, keyof INewsData]