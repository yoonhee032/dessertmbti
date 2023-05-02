import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import heartJson from "../assets/heart.json";

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <Wrapper>
          {/* <Header> 디저트 테스트 </Header> */}
          <div class="container mx-auto flex items-center justify-center text-center px-3 py-24 ">
            <div class="lg:w-[390px] md:w-[390px] bg-white rounded-lg flex flex-col w-full relative py-16">
              <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
                디저트 테스트
              </h1>
              <h3 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                {/* 내 이미지와 어울리는 디저트(케이크)는? */}
                내가 디저트라면?
              </h3>
              <Lottie loop animationData={heartJson} play />
              <div class="text-center w-full">
                <p class="mb-8 leading-relaxed">
                  MBTI를 기반으로
                  <br /> 나와 어울리는 디저트 찾기!
                </p>
              </div>
              <button class="text-white bg-indigo-500 border-0 py-3 px-6 mb-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <h3>테스트 시작하기</h3>
                <div>지금까지 ~명이 테스트를 진행했어요</div>
              </button>
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
`;
const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;

const LottieWrap = styled.div`
  width: 350px;
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;
