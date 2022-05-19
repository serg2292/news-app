import { FormEvent, useState } from "react";

const NewsAdd = () => {

    const dateNow = () => {
        const now = new Date();
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    }

    const [addNewsField, setAddNewsField] = useState("");

    const handleSubmit = (event: FormEvent) => {
      console.log(addNewsField);
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