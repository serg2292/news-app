import React, { useState } from "react";
import { INewsList } from "../../../types/types";

const NewsList = ({ newsList }: INewsList) => {
  const propertyNews = ["Дата", "Название"];
  return (
    <table>
      <thead>
        <tr>
          {propertyNews.map((val) => (
            <th key={`h_${val}`}>{val}</th>
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
