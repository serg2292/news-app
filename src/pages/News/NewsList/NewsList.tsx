import { useAppSelector } from "../../../hooks/hooks";
import { IpropertyNews } from "../../../types/types";
import {
  tableStyle,
  tbodyStyle,
  tdStyle,
  theadStyle,
  trStyle,
} from "./NewsListStyles";

const NewsList = () => {
  const { newsList } = useAppSelector((state) => state.newsList);

  const propertyNews: IpropertyNews = ["date", "name"];

  return (
    <table className={tableStyle}>
      <thead className={theadStyle}>
        <tr>
          {propertyNews.map((item) => (
            <th key={`h_${item}`}>
              {item === "date" ? "Дата" : "Название статьи"}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={tbodyStyle}>
        {newsList.map((val, i) => (
          <tr className={trStyle} key={`i_${i}`}>
            {propertyNews.map((p) => (
              <td className={tdStyle} key={`i_${i}_${p}`}>
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
