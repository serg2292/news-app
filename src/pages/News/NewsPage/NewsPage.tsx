import NewsAdd from "../NewsAdd/NewsAdd";
import NewsList from "../NewsList/NewsList";
import NewsSearch from "../NewsSearch/NewsSearch";

const NewsPage = () => {
    return (
        <div className="md:container w-full md:mx-auto mt-24 mb-8 font-content">
            <NewsSearch />
            <NewsAdd />
            <NewsList/>

        </div>
    );
};

export default NewsPage;
