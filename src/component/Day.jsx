import React from "react";
import dummy from "../db/data.json";
import { Link } from "react-router-dom";

const Day = () => {
  return (
    <div className="day">
      <ul>
        {dummy.dyas.map((days) => (
          <li key={days.id}>
            <Link to={`/day/${days.day}`}>Day{days.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day;
