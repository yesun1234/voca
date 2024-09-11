import React from "react";
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
const Word = () => {
  const { day } = useParams();
  const WordList = dummy.words.filter((word) => word.day === Number(day));
  return (
    <div className="word">
      <h2>Day {day}</h2>

      <table>
        <tbody>
          {WordList.map((word) => (
            <tr key={word.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{word.eng}</td>
              <td>{word.kor}</td>

              <td>
                <button>뜻보기</button>
                <button>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Word;
