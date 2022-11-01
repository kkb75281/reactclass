import React from "react";

const BannerText = {
  blind: "배너 영역",
  title: "RESERVATION",
  desc: "아래 링크를 통해 실시간 예약 일정을 확인하실 수 있습니다.",
  linkText: "reservation.com/c/JEJUsari",
  tit: "JEJU sari",
};

function Banner({ attr }) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">{BannerText.blind}</h2>
      <div className="banner__inner">
        <h3 className="banner__title">{BannerText.title}</h3>
        <p className="banner__desc">
          {BannerText.desc}
          <a href="/" title="새페이지 열림">
            {BannerText.linkText}
          </a>
        </p>
        <span className="banner__small">{BannerText.tit}</span>
      </div>
    </section>
  );
}

export default Banner;
