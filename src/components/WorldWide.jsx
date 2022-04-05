import React from "react";
import "../styles/worldwide.css";
const WorldWide = ({ data }) => {
  const arr = [];
  data.forEach((obj) => {
    obj.scores.forEach((item) => {
      arr.push(item);
    });
  });
  const sortedArray = arr.sort((a, b) => b.s - a.s);
  // const [top,setTop]=useState(data.sort(a,b)=>)
  return (
    <article className="world_article">
      <h1 className="world_title">World Wide Table:</h1>
      <table className="world_table">
        <thead>
          <tr>
            <td>Top Players</td>
            <td>Scores</td>
          </tr>
        </thead>
        <tbody>
          {sortedArray.map((item) => {
            return (
              <tr>
                <td>{item.n}</td>
                <td>{item.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default WorldWide;
