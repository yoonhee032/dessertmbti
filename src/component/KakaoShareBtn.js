import React, { useEffect } from "react";
import styled from "styled-components";

const KakaoShareBtn = ({ data }) => {
  const url = "https://localhost:3000/";
  const resultUrl = window.location.href;

  //   useEffect(() => {
  //     kakaoButton();
  //   }, []);

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init("497f677a2ce09434d79c85c5abab471a");
      }

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "디저트 판별기 결과",
          description: "나와 가장 잘맞는 디저트는 무엇일까요?",
          imageUrl:
            "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },

        buttons: [
          {
            title: "나도 테스트 하러가기",
            link: {
              mobileWebUrl: url,
              webUrl: "https://developers.kakao.com",
            },
          },
        ],
      });
    }
  };

  return (
    <>
      <button
        className="text-gray-500"
        onClick={() => {
          kakaoButton();
        }}
      >
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </button>
    </>
  );
};

export default KakaoShareBtn;
