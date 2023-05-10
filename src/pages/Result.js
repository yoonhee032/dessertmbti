import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";

import styled from "styled-components";
import KakaoShareBtn from "../component/KakaoShareBtn";
import ShareLogo from "../assets/share.svg";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState();

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  const handleClick = (move) => {
    if (move === "more") {
      window.open("https://sweetrip.swygbro.com/");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <Wrapper>
          {/* <Header> 디저트 테스트 </Header> */}
          <div className="container mx-auto flex items-center justify-center text-center px-3 py-24 ">
            <div className="lg:w-[390px] md:w-[390px] bg-white rounded-lg flex flex-col w-full relative py-16">
              <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                {/* 내 이미지와 어울리는 디저트(케이크)는? */}
                {resultData && resultData.title}
              </h3>
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
                {resultData && resultData.name}
              </h1>

              <img
                className=" mb-10 object-cover object-center rounded"
                alt="hero"
                src={resultData && resultData.image}
              />

              {/* <Lottie loop animationData={heartJson} play /> */}
              <div className="text-left flex flex-wrap -mx-2">
                <div className="p-2 w-full">
                  {resultData &&
                    resultData.desc.map((item) => (
                      <>
                        <div
                          key={item.id}
                          className="bg-gray-100 rounded flex p-4  items-center"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="text-indigo-300 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>

                          <span className="title-font font-medium">{item}</span>
                        </div>
                        {/* </li> */}
                      </>
                    ))}
                </div>
              </div>
              <div className="px-3 p-5 mx-auto">
                <a className="flex title-font font-medium items-center">
                  <span className="ml-3 mb-2 text-xl">결과 공유하기</span>
                </a>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <KakaoShareBtn data={resultData} />
                  <button>
                    <img src={ShareLogo}></img>
                  </button>
                </span>
              </div>
              <button
                className="text-white bg-[#7EB2FF] border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-[#E8405C] rounded text-lg"
                onClick={() => {
                  handleClick("more");
                }}
              >
                <h3>더 많은 디저트 보러가기 👉</h3>
              </button>
              <button
                className="text-white bg-[#FFAABE] border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-[#E8405C] rounded text-lg"
                onClick={() => {
                  handleClick("home");
                }}
              >
                <h3>테스트 다시하기</h3>
              </button>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "BAggroB";
`;
