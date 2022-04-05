import React, { useState } from "react";
import data from "../data/scores";
import Country from "./Country";
import "../styles/allcountries.css";
import WorldWide from "./WorldWide";
const AllCountries = () => {
  const [sorting, setSorting] = useState(true);
  const [storage, setStorage] = useState(data);

  return (
    <>
      <WorldWide data={data}></WorldWide>
      <h1 className="title">High Scores Per Country:</h1>
      <button className="sort_btn" onClick={() => setSorting(!sorting)}>
        Sort
      </button>
      <article className="all_countries">
        {storage
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, index) => {
            return (
              <Country
                country={item}
                key={index}
                sorting={sorting}
                setSorting={setSorting}
              ></Country>
            );
          })}
      </article>
      <footer>
        <p>
          Made by <a href="https://github.com/Ali-Jahankah">Ali Jahankah</a>
        </p>
      </footer>
    </>
  );
};

export default AllCountries;
