import React from "react";

function Banner({ attr }) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="banner__title">RESERVATION</h3>
        <p className="banner__desc">
          아래 링크를 통해 실시간 예약 일정을 확인하실 수 있습니다.
          <a href="/" title="새페이지 열림">
            reservation.com/c/JEJUsari
          </a>
        </p>
        <span className="banner__small">JEJU sari</span>
      </div>
    </section>
  );
}

export default Banner;
