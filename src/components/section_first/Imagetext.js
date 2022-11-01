import React from "react";

function Imagetext({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[4]}`}>
        <div className="imgText__txt">
          <span>STAY</span>
          <h3>JEJU sari Interior</h3>
          <p>
            모던하고 아늑한 분위기로 제주 자연의 따뜻함과 청량함을 객실에 그대로
            담았습니다.
          </p>
          <ul>
            <li>
              <a href="/">Deluxe</a>
            </li>
            <li>
              <a href="/">Deluxe Family</a>
            </li>
            <li>
              <a href="/">Premier</a>
            </li>
            <li>
              <a href="/">Premier Family</a>
            </li>
            <li>
              <a href="/">Junior Suite</a>
            </li>
            <li>
              <a href="/">Junior Suite Family</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">Deluxe</a>
        </div>
        <div className="imgText__img img2">
          <a href="/">Deluxe Family</a>
        </div>
      </div>
    </section>
  );
}

export default Imagetext;
