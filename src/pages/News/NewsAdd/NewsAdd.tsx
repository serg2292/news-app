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
    setAddField(event.target.value);
  };

  return (
    <>
      <form className="relative w-full" onSubmit={handleSubmit}>
        {/* <button type="submit">Добавить новость</button> */}
        <input
          className="border text-grey-100 border-grey-100 focus:outline-none w-full px-2.5 py-1.5"
          type="text"
          placeholder="Добавить новость"
          value={addField}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default NewsAdd;