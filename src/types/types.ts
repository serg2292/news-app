export interface INewsData {
  date: string;
  name: string;
}

export interface INewsListSlice {
  newsList: INewsData[];
  newsListCopy: INewsData[];
}

export interface INewsListComponent {
  newsList: INewsData[];
}

export interface IHeaderComponent {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalComponent extends IHeaderComponent {}

export type IpropertyNews = [keyof INewsData, keyof INewsData];

export interface IUser {
  login: string;
  password: string;
}

export interface IUsersAuthSlice {
  users: IUser[];
  authLogin: string | null;
}
