import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";

import styled from "styled-components";
import KakaoShareBtn from "../component/KakaoShareBtn";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState();

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);

  const handleClick = () => {
    navigate("/");
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
                src="https://dummyimage.com/720x600"
              />
              {/* <Lottie loop animationData={heartJson} play /> */}
              <div className="text-left flex flex-wrap -mx-2">
                <div className="p-2 w-full">
                  {resultData &&
                    resultData.desc.map((item) => (
                      <>
                        <div className="bg-gray-100 rounded flex p-4  items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                  <span className="ml-3 text-xl">결과 공유하기</span>
                </a>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <KakaoShareBtn data={resultData} />
                  {/* <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a> */}
                  {/* <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a> */}
                  {/* <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a> */}
                  {/* <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a> */}
                </span>
              </div>
              <button
                className="text-white bg-indigo-500 border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={handleClick}
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
