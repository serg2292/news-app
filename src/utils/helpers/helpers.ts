const transformDate = (n: number) => n < 10 ? `0${n}` : n

export const dateNow = () => {
  const now = new Date();
  return `${transformDate(now.getDate())}-${transformDate(now.getMonth() + 1)}-${now.getFullYear()}`
}

