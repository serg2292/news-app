import { useAppSelector } from "../../../hooks/hooks";
import { IpropertyNews } from "../../../types/types";

const NewsList = () => {
  const { newsList } = useAppSelector((state) => state.newsList);

  const propertyNews: IpropertyNews = ["date", "name"];
  return (
    <table className="w-full relative">
      <thead className="hidden md:table-header-group font-bold text-lg">
        <tr>
          {propertyNews.map((item) => (
            <th key={`h_${item}`}>{item === 'date' ? 'Дата' : 'Название статьи'}</th>
          ))}
        </tr>
      </thead>
      <tbody className="border border-t-0 border-b-1 border-grey-100 md:border-t">
        {newsList.map((val, i) => (
          <tr className="last:border-b-0 border-b border-grey-100" key={`i_${i}`}>
            {propertyNews.map((p) => (
              <td className="
              border-grey-100
              py-1
              px-1.5
              text-center
              first:absolute
              first:text-sm
              first:left-1/2
              first:-translate-x-1/2
              first:text-white
              first:bg-green-100
              last:pt-8
              md:first:w-1/6
              md:first:border-r
              md:first:border-b-1
              md:last:5/6
              md:first:static
              md:first:text-black
              md:first:bg-inherit
              md:first:translate-x-0
              md:first:text-base
              md:last:py-5
              " key={`i_${i}_${p}`}>
                {val[p]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsList;
