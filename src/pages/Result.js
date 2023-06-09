import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactGA from "react-ga";
import { ResultData } from "../assets/data/resultData";

import Loading from "./Loading";
import { KakaoLoadOne } from "./Home";
import GoogleAdvertise from "../component/GoogleAdvertise";

import styled from "styled-components";
import SweetLogo from "../assets/main_logo.svg";
import KakaoShareBtn from "../component/KakaoShareBtn";
import ShareLogo from "../assets/share.svg";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState();
  const [fairData, setFairData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);

    const goodFair = ResultData.find((s) => s.best === result.good);
    const badFair = ResultData.find((s) => s.best === result.bad);
    setFairData({
      good: goodFair,
      bad: badFair,
    });
  }, [mbti]);

  // console.log("FairData", fairData);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    KakaoLoadOne();
  }, []);

  const handleClick = (move) => {
    if (move === "more") {
      window.open("https://sweetrip.swygbro.com/");
    } else {
      navigate("/");
    }
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("결과 공유 링크가 복사되었습니다!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <Wrapper>
          {/* <Header> 디저트 테스트 </Header> */}
          <div className="container mx-auto flex items-center justify-center text-center px-3 py-5 ">
            <div className="lg:w-[390px] md:w-[390px] bg-white rounded-lg flex flex-col w-full relative py-5">
              {loading ? (
                <Loading />
              ) : (
                <>
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

                              <span className="title-font font-medium">
                                {item}
                              </span>
                            </div>
                            {/* </li> */}
                          </>
                        ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full border-2 border-gray-200 rounded-lg">
                          <div className="text-center relative z-10 w-full">
                            <h2 className="text-l text-gray-900 font-medium title-font mt-2 mb-2">
                              환상의 케미
                            </h2>
                            <img
                              className="mb-3 object-cover  rounded"
                              alt="hero"
                              src={fairData && fairData.good.image}
                            />
                            <p className="text-sm text-gray-500 font-light mb-1">
                              {fairData.good.title}
                            </p>
                            <h1>{fairData.good.name}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full">
                          <div className="text-center relative z-10 w-full border-2 border-gray-200 rounded-lg">
                            <h2 className="text-l text-gray-900 font-medium title-font mt-2 mb-2">
                              환장의 케미
                            </h2>
                            <img
                              className="mb-3 object-cover  rounded"
                              alt="hero"
                              src={fairData && fairData.bad.image}
                            />
                            <p className="text-sm text-gray-500 font-light mb-1">
                              {fairData.bad.title}
                            </p>
                            <h1>{fairData.bad.name}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 p-5 mx-auto">
                    <a
                      href="#!"
                      className="flex title-font font-medium items-center"
                    >
                      <span className="ml-3 mb-2 text-xl">결과 공유하기</span>
                    </a>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                      <KakaoShareBtn data={resultData} />
                      <button>
                        <img
                          src={ShareLogo}
                          alt="공유 이미지"
                          onClick={() =>
                            handleCopyClipBoard(
                              `${process.env.REACT_APP_HOME_URL}`
                            )
                          }
                        ></img>
                      </button>
                    </span>
                  </div>
                  <button
                    className="text-white bg-[#4f96ff] border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-[#7eb2ff] rounded text-lg"
                    onClick={() => {
                      handleClick("more");
                      ReactGA.event({
                        category: "Event",
                        action: "Press more button",
                      });
                    }}
                  >
                    <h3>더 많은 디저트 보러가기 👉</h3>
                  </button>
                  <button
                    className="text-white bg-[#E8405C] border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-[#FFAABE] rounded text-lg"
                    onClick={() => {
                      handleClick("home");
                    }}
                  >
                    <h3>테스트 다시하기</h3>
                  </button>
                </>
              )}
            </div>
          </div>
        </Wrapper>

        <Footer>
          <div className="px-5 py-5 pb-16 text-center gap-5 h-auto">
            <GoogleAdvertise
              display="inline-block"
              width="300px"
              height="250px"
              client="ca-pub-1919598055512436"
              slot="9210283486"
            />
            <a
              href="#!"
              className="flex font-mono font-medium text-center justify-center text-gray-900"
            >
              <img src={SweetLogo} alt="로고 이미지"></img>
            </a>
            <p className="text-[#999] mt-0 text-base pl-5 max-[640px]:text-sm">
              Copyright © 2023 SWEETRIP All Rights Reserved.
            </p>
          </div>
        </Footer>
        <div className="adfitOne" />
      </section>
    </>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  font-family: "BAggroB";
`;

const Footer = styled.div`
  height: 100%;
  width: 100%;
`;
