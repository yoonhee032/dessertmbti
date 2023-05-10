import React from "react";
import KakaoLogo from "../assets/kakaotalk_logo_icon_147272.svg";

const KakaoShareBtn = ({ data }) => {
  const url = process.env.REACT_APP_HOME_URL;
  const resultUrl = window.location.href;

  // console.log("데이터", data);

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_INIT_NUM);
      }

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "디저트 판별기 결과",
          description: `나와 가장 잘맞는 디저트는 ${data.name}입니다.`,
          imageUrl: url + data.image,
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
        <img src={KakaoLogo} alt="kakao 로고"></img>
      </button>
    </>
  );
};

export default KakaoShareBtn;
