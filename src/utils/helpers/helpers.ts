import { IUser } from "../../types/types";

const transformDate = (n: number) => n < 10 ? `0${n}` : n

export const dateNow = () => {
  const now = new Date();
  return `${transformDate(now.getDate())}-${transformDate(now.getMonth() + 1)}-${now.getFullYear()}`
}

const compare = (obj1: IUser, obj2: IUser) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export const auth = (arr: IUser[], obj: IUser) => {
  return arr.some(elem => compare(elem, obj))
}

export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
