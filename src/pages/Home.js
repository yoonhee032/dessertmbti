import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import heartJson from "../assets/heart.json";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header> 디저트 테스트 </Header>
        <Contents>
          <Title> 내 이미지와 어울리는 디저트(케이크)는? </Title>
          <LottieWrap>
            <Lottie loop animationData={heartJson} play />
          </LottieWrap>
          <Desc>MBTI를 기반으로 나와 어울리는 디저트 찾기!</Desc>
          <Button>테스트 시작하기</Button>
        </Contents>
      </Wrapper>
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

const Button = styled.button`
  width: 200px;
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;
