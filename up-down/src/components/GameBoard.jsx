// 1. App.jsx로 옮기기
// 2. 회차랑 내 점수를 배열(회차는 인덱스가 있기 때문에 배열을 사용)로 저장

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const GameBoard = () => {
  const { point, setPoint } = useContext(AppContext);
  const { data, setData } = useContext(AppContext);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  const onClickCheck = (e) => {
    e.preventDefault();

    // 1. 문자입력 예외처리
    let checkNum = parseInt(choiceNum);

    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요 !");
      return;
    }

    //2. 0~100 이외의 숫자
    if (0 > checkNum || 100 <= checkNum) {
      setHint("0 ~ 100 사이의 숫자만 입력해주세요 !");
      return;
    }

    // 랜덤 숫자와 유저가 선택한 숫자 비교
    if (randomNum === checkNum) {
      setHint("정답입니다! 랜덤 값을 초기화 합니다 !");

      // 포인트 초기화
      if (point > 0) {
        // 기존 점수 불러오기
        let savedPoint = localStorage.getItem("point");
        // 기존 점수와 현재 점수 합치기
        // 다시 저장
        localStorage.setItem("point", parseInt(savedPoint) + point);
      }

      // 역대 포인트 저장
      setData([...data, point]);
      console.log(data);
      // 랜덤값을 초기화
      setRandomNum(Math.floor(Math.random() * 100));
      setChoiceNum("");
      setPoint(5);
    } else if (randomNum > checkNum) {
      setHint(`${checkNum}보다는 높아요 !`);
      setPoint(point - 1);
    } else if (randomNum < checkNum) {
      setHint(`${checkNum}보다는 낮아요 !`);
      setPoint(point - 1);
    }
  };

  useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
  useEffect(
    () => console.log(`입력하신 숫자는 ${choiceNum}입니다.`),
    [choiceNum]
  );
  useEffect(() => {}, [point]);

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{point}</div>
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <form onSubmit={onClickCheck}>
          <input
            className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
            type="text"
            value={choiceNum}
            onChange={onChangeChoice}
          />
          {/* <button
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
          onClick={onClickCheck}
        >
          확인
        </button> */}
          <input
            className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
            type="submit"
            value="확인"
          />
        </form>
      </div>
    </div>
  );
};

export default GameBoard;
