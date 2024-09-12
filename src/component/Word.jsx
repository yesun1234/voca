import React from "react";
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import WordCheck from "./WordCheck";
const Word = () => {
  const { day } = useParams();
  const WordList = dummy.words.filter((word) => word.day === Number(day));
  return (
    <div className="word">
      <h2>Day {day}</h2>

      <table>
        <tbody>
          {WordList.map(word => (
           <WordCheck word={word} key={word.day}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Word;
