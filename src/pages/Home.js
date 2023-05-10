import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import SweetLogo from "../assets/main_logo.svg";
import MainImage from "../assets/image/dessert3.gif";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/question");
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <Wrapper>
          {/* <Header> 디저트 테스트 </Header> */}
          <div className="container mx-auto flex items-center justify-center text-center px-3 py-12 ">
            <div className="lg:w-[390px] md:w-[390px] bg-white rounded-lg flex flex-col w-full relative py-16">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
                디저트 테스트
              </h1>
              <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                {/* 내 이미지와 어울리는 디저트(케이크)는? */}
                내가 디저트라면?
              </h3>
              {/* <Lottie loop animationData={heartJson} play /> */}

              <img
                src={MainImage}
                alt="메인이미지"
                width="55%"
                className="mr-auto ml-auto mb-10"
              />

              <div className="text-center w-full">
                <p className="mb-8 leading-relaxed GangwonEduPowerExtraBoldA">
                  MBTI를 기반으로
                  <br /> 나와 닮은 디저트 캐릭터 찾기!
                </p>
              </div>
              <button
                className="text-white bg-[#FFAABE] border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-[#E8405C] rounded text-2xl"
                onClick={handleClick}
              >
                <h3>테스트 시작하기</h3>
                {/* <div>지금까지 ~명이 테스트를 진행했어요</div> */}
              </button>
              {/* <div className="px-3 p-5 mx-auto">
                <a className="flex title-font font-medium items-center">
                  <span className="ml-3 mb-2 text-xl">결과 공유하기</span>
                </a>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <KakaoShareBtn data={resultData} />
                  <button>
                    <img src={ShareLogo}></img>
                  </button>
                </span>
              </div> */}
              {/* <div className="text-center w-full">
                <div className="mb-8 items-center leading-relaxed GangwonEduPowerExtraBoldA">
                  <img src={SweetLogo}></img>
                </div>
              </div> */}
              <div className="mx-auto flex px-5  items-center justify-center flex-col">
                <img src={SweetLogo} alt="로고 이미지"></img>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "BAggroB";
`;
