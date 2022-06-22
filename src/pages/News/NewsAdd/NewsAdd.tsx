import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { addNews } from "../../../redux/news-data/news-data.slice";
import { dateNow } from "../../../utils/helpers/helpers";
import { useAppSelector } from "../../../hooks/hooks";

const NewsAdd = () => {

  const dispatch = useAppDispatch();
  const authLogin = useAppSelector((state) => state.usersAuth.authLogin);

  const newsAddStyles = "border border-t-0 text-grey-100 border-grey-100 focus:outline-none w-full px-2.5 py-1.5";

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
      <form className="w-full" onSubmit={handleSubmit}>
        {/* <button type="submit">Добавить новость</button> */}
        <input
          className={authLogin === 'admin' ? newsAddStyles : newsAddStyles + ' hidden'}
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