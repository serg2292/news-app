import { useAppSelector } from "../../hooks/hooks";
import NewsList from "./NewsList/NewsList";


const News = () => {
    const { newsList } = useAppSelector((state) => state.newsList);
    return (
        <>
            <NewsList newsList={newsList} />
        </>
    );
};

export default News;
