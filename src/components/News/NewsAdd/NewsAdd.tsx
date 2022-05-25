import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { addNews } from "../../../redux/newsDataReducer/newsDataReducer";

const NewsAdd = () => {

  const dispatch = useAppDispatch();

  const dateNow = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
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