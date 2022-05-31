import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { searchNews } from "../../../redux/news-data/news-data.slice";


const NewsSearch = () => {
    const [searchField, setSearchField] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchNews(event.target.value))
        setSearchField(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Поиск статьи" value={searchField} onChange={handleChange} />
            </form>
        </>
    );
};

export default NewsSearch;
