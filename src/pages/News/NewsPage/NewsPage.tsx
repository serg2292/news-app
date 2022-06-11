import NewsAdd from "../NewsAdd/NewsAdd";
import NewsList from "../NewsList/NewsList";
import NewsSearch from "../NewsSearch/NewsSearch";

const NewsPage = () => {
    return (
        <div className="container mx-auto mt-24 font-content">
            <NewsSearch />
            <NewsList/>
            <NewsAdd />
        </div>
    );
};

export default NewsPage;
