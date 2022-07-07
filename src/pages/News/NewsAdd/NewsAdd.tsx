import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { addNews } from "../../../redux/news-data/news-data.slice";
import { dateNow } from "../../../utils/helpers/helpers";
import { useAppSelector } from "../../../hooks/hooks";
import { newsAddStyle } from "./NewsAddStyles";

const NewsAdd = () => {
  const dispatch = useAppDispatch();
  const authLogin = useAppSelector((state) => state.usersAuth.authLogin);

  const [addField, setAddField] = useState("");

  const handleSubmit = (event: FormEvent): void => {
    if (addField.trim() !== "") {
      const news = {
        date: dateNow(),
        name: addField,
      };
      dispatch(addNews(news));
      setAddField("");
    }

    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddField(event.target.value);
  };

  return (
    <>
      <form className="w-full mb-6" onSubmit={handleSubmit}>
        <input
          className={
            authLogin === "admin" ? newsAddStyle : newsAddStyle + " hidden"
          }
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
