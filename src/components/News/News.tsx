import { useAppSelector } from "../../hooks/hooks";
import NewsAdd from "./NewsAdd/NewsAdd";
import NewsList from "./NewsList/NewsList";
import NewsSearch from "./NewsSearch/NewsSearch";


const News = () => {
    const { newsList } = useAppSelector((state) => state.newsList);
    return (
        <><NewsAdd/>
            <NewsList newsList={newsList} />
            <NewsSearch/>
        </>
    );
};

export default News;
