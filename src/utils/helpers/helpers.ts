import { INewsData, IUser } from "../../types/types";

export const transformDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const dateNow = () => {
  const now = new Date();
  return `${now.getFullYear()}-${transformDate(
    now.getMonth() + 1
  )}-${transformDate(now.getDate())}`;
};

export const compare = (obj1: IUser, obj2: IUser) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const auth = (arr: IUser[], obj: IUser) => {
  return arr.some((elem) => compare(elem, obj));
};

export const capitalize = (str: string) =>
  str ? str[0].toUpperCase() + str.slice(1) : "";

export const sortNews = (news: INewsData[]) =>
  news.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
