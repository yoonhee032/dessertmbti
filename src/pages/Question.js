import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { QuestionData } from "../assets/data/questionData";

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickBtn = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //mbti 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      //결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  // console.log(QuestionData[questionNo].img);

  return (
    <div>
      <Wrapper>
        <div className="container mx-auto flex items-center justify-center text-center px-3 py-12 ">
          <div className="lg:w-[390px] md:w-[390px] bg-white rounded-lg  w-full relative py-16">
            <div className="text-right">{questionNo + 1}/12</div>
            <div className="w-full mb-12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#FFAABE] h-2.5 rounded-full"
                style={{
                  width: `${((questionNo + 1) / QuestionData.length) * 100}%`,
                }}
              ></div>
            </div>
            <div className="title-font sm:text-xl text-xl mb-4  text-gray-900">
              <div>{QuestionData[questionNo].title}</div>
            </div>
            <img
              className=" mb-10 object-cover object-center rounded"
              alt="hero"
              src={QuestionData[questionNo].img}
            />
            <div>
              <button
                type="button"
                className="w-[100%] min-h-[140px] text-[#E8405C] hover:text-white border border-gray-300 hover:bg-[#E8405C]  font-medium rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => handleClickBtn(1, QuestionData[questionNo].type)}
              >
                <Font>{QuestionData[questionNo].answera}</Font>
              </button>
              <button
                type="button"
                className="w-[100%] min-h-[140px] text-[#E8405C] hover:text-white border border-gray-300 hover:bg-[#E8405C]  font-medium rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => handleClickBtn(0, QuestionData[questionNo].type)}
              >
                <Font>{QuestionData[questionNo].answerb}</Font>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "BAggroB";
`;

const Font = styled.pre`
  font-family: "BAggroB";
`;

export default Question;
