import { FormEvent } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { searchNews } from "../../../redux/news-data/news-data.slice";
import { inputStyle } from "./NewsSearchStyles";

const NewsSearch = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchNews(event.target.value));
  };

  return (
    <>
      <form className="w-full mb-6" onSubmit={handleSubmit}>
        <input
          className={inputStyle}
          type="text"
          placeholder="Поиск новости"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default NewsSearch;
