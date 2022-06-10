import { useAppSelector } from "../../../hooks/hooks";
import { IpropertyNews } from "../../../types/types";

const NewsList = () => {
  const { newsList } = useAppSelector((state) => state.newsList);

  const propertyNews: IpropertyNews = ["date", "name"];
  return (
    <table>
      <thead>
        <tr>
          {propertyNews.map((item) => (
            <th key={`h_${item}`}>{item === 'date' ? 'Дата' : 'Название статьи'}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {newsList.map((val, i) => (
          <tr key={`i_${i}`}>
            {propertyNews.map((p) => (
              <td key={`i_${i}_${p}`}>{val[p]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsList;
