import React from "react";
import "../styles/player.css";
const PlayeScore = ({ info }) => {
  return (
    <tr className="tr">
      <td>{info.n}</td>
      <td>{info.s}</td>
    </tr>
  );
};

export default PlayeScore;
