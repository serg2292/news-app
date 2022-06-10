import NewsAdd from "../NewsAdd/NewsAdd";
import NewsList from "../NewsList/NewsList";
import NewsSearch from "../NewsSearch/NewsSearch";

const NewsPage = () => {
    return (
        <>
            <NewsSearch />
            <NewsList/>
            <NewsAdd />
        </>
    );
};

export default NewsPage;
