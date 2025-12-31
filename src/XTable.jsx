import React, { useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

const XTable = () => {
  let [rows, setRows] = useState(data);

  const sortByDate = () => {
    const sorting = [...rows].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);

      if (dateDiff !== 0) return dateDiff;

      return b.views - a.views;
    });
    setRows(sorting);
  };

  const sortByViews = () => {
    const sorting = [...rows].sort((a, b) => {
      const viewDiff = b.views - a.views;

      if (viewDiff !== 0) return viewDiff;

      return new Date(b.date) - new Date(a.date);
    });
    setRows(sorting);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>{row.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default XTable;
