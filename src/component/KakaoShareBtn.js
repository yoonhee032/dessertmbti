import React, { useEffect } from "react";
import styled from "styled-components";
import KakaoLogo from "../assets/kakaotalk_logo_icon_147272.svg";

const KakaoShareBtn = ({ data }) => {
  const url = "https://localhost:3000/";
  const resultUrl = window.location.href;

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
          description: `나와 가장 잘맞는 디저트는 ${data.name}입니다.`,
          imageUrl:
            "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },

        buttons: [
          {
            title: "나도 테스트 하러가기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <>
      <button
        className="text-gray-500 mr-2"
        onClick={() => {
          kakaoButton();
        }}
      >
        <img src={KakaoLogo}></img>
      </button>
    </>
  );
};

export default KakaoShareBtn;
