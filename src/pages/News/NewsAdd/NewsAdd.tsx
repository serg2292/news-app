import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { addNews } from "../../../redux/news-data/news-data.slice";
import { dateNow } from "../../../utils/helpers/helpers";


const NewsAdd = () => {

  const dispatch = useAppDispatch();

  const [addField, setAddField] = useState("");

  const handleSubmit = (event: FormEvent): void => {
    if (addField.trim() !== "") {
      const news = {
        date: dateNow(),
        name: addField,
      }
      dispatch(addNews(news))
      setAddField("");
    }

    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") setAddField(event.target.value);


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