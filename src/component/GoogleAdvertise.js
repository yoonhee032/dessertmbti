import React, { useEffect } from "react";

const GoogleAdvertise = ({
  className = "adsbygoogle",
  client = "",
  slot = "",
  display,
  width,
  height,
  color,
}) => {
  useEffect(() => {
    if (!window.location.href.includes("localhost"))
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("Advertise is pushed");
      } catch (e) {
        console.error("AdvertiseError", e);
      }
  }, []);

  if (window.location.href.includes("localhost"))
    return (
      <div
        style={{
          display: display,
          width: width,
          height: height,
  
        }}
      >
        광고 표시 영역
      </div>
    );
  return (
    <ins
      className={className}
      style={{
        display: display,
        width: width,
        height: height,
      }}
      data-ad-client={client}
      data-ad-slot={slot}
    ></ins>
  );
};

export default GoogleAdvertise;
