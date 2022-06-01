import { FormEvent } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { searchNews } from "../../../redux/news-data/news-data.slice";


const NewsSearch = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchNews(event.target.value))

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Поиск статьи" onChange={handleChange} />
            </form>
        </>
    );
};

export default NewsSearch;
