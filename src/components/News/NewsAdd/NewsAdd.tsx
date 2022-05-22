import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addNews } from "../../../redux/newsDataReducer/newsDataReducer";

const NewsAdd = () => {
  const { newsList } = useAppSelector((state) => state.newsList);
  const dispatch = useAppDispatch();

  const dateNow = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  }

  const [addNewsField, setAddNewsField] = useState("");

  const handleSubmit = (event: FormEvent): void => {
    const news = {
      date: dateNow(),
      name: addNewsField,
    }
    dispatch(addNews(news))
    setAddNewsField("");
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddNewsField(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Добавить статью"
          value={addNewsField}
          onChange={handleChange}
        />
        <button type="submit">Добавить новость</button>
      </form>
    </>
  );
};

export default NewsAdd;