import NewsAdd from "../NewsAdd/NewsAdd";
import NewsList from "../NewsList/NewsList";
import NewsSearch from "../NewsSearch/NewsSearch";
import { newsPageStyle } from "./NewsPageStyles";

const NewsPage = () => {
    return (
        <div className={newsPageStyle}>
            <NewsSearch />
            <NewsAdd />
            <NewsList/>
        </div>
    );
};

export default NewsPage;
