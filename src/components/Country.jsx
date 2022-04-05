import React from "react";
import PlayerScore from "./PlayerScore";
import "../styles/country.css";
const Country = ({ country, sorting, setSorting }) => {
  return (
    <div className="country_container">
      <h1 className="table_title">High Scores: {country.name}</h1>
      <table className="table">
        <tbody>
          {sorting
            ? country.scores
                .sort((a, b) => b.s - a.s)
                .map((info, index) => {
                  return <PlayerScore key={index} info={info}></PlayerScore>;
                })
            : country.scores
                .sort((a, b) => a.s - b.s)
                .map((info, index) => {
                  return <PlayerScore key={index} info={info}></PlayerScore>;
                })}
        </tbody>
      </table>
    </div>
  );
};

export default Country;
