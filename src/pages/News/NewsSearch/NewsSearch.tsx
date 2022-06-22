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
            <form className="w-full" onSubmit={handleSubmit}>
                <input
                    className="w-full border text-grey-100 border-grey-100 focus:outline-none md:w-72 px-2.5 py-1.5 mb-6"
                    type="text"
                    placeholder="Поиск новости"
                    onChange={handleChange} />
            </form>
        </>
    );
};

export default NewsSearch;
