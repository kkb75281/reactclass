import React from "react";

function Text({ attr }) {
  return (
    <section
      id="textType"
      className={`text__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <span>JEJU sari PICK</span>
      <h2 className="mb70">RECOMMEND</h2>
      <div className={`text__inner ${attr[3]}`}>
        <div className="text t1">
          <h3 className="text__title">사려니숲길</h3>
          <p className="text__desc">
            비자림로를 시작으로 물찻오름과 사려니 오름을 거쳐가는 삼나무가
            우거진 숲길입니다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">박수기정</h3>
          <p className="text__desc">
            "바가지로 마실 수 있는 깨끗한 샘물이 솟아나는 절벽"이라는 뜻을
            가지고 있는 제주 명소입니다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">휴애리 자연생활공원</h3>
          <p className="text__desc">
            각 계절마다 꽃축제가 열리며 다양한 볼거리를 제공해 주는 핫플레이스
            관광지입니다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">산방산</h3>
          <p className="text__desc">
            서남부의 평야지대에 우뚝 서 있는 곳으로 어디서든 조망할 수 잇는
            아름다운 명소입니다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">카멜리아힐</h3>
          <p className="text__desc">
            동양 최대 규모의 동백 수목원으로 각종 조경수와 함께 어우러진
            수목원입니다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">성읍 민속마을</h3>
          <p className="text__desc">
            옛 마을 형태의 민속 경관이 잘 유지되어 있어 제주도 옛 민가의 특징이
            잘 간직되어 있는 곳입니다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
