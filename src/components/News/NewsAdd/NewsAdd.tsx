import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { addNews } from "../../../redux/newsDataReducer/newsDataReducer";

const NewsAdd = () => {

  const dispatch = useAppDispatch();

  const transformDate = (n: number) => n < 10 ? `0${n}` : n

  const dateNow = () => {
    const now = new Date();
    return `${transformDate(now.getDate())}-${transformDate(now.getMonth() + 1)}-${now.getFullYear()}`
  }

  const [addField, setAddField] = useState("");

  const handleSubmit = (event: FormEvent): void => {
    const news = {
      date: dateNow(),
      name: addField,
    }
    dispatch(addNews(news))
    setAddField("");
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddField(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Добавить статью"
          value={addField}
          onChange={handleChange}
        />
        <button type="submit">Добавить новость</button>
      </form>
    </>
  );
};

export default NewsAdd;