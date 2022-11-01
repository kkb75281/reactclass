import React from "react";

const TextTitle = {
  span: "JEJU sari PICK",
  title: "RECOMMEND",
};

const TextInfo = [
  {
    className: "t1",
    title: "사려니숲길",
    desc: "비자림로를 시작으로 물찻오름과 사려니 오름을 거쳐가는 삼나무가 우거진 숲길입니다.",
    btnLink: "/",
  },
  {
    className: "t2",
    title: "박수기정",
    desc: "'바가지로 마실 수 있는 깨끗한 샘물이 솟아나는 절벽'이라는 뜻을 가지고 있는 제주 명소입니다.",
    btnLink: "/",
  },
  {
    className: "t3",
    title: "휴애리 자연생활공원",
    desc: "각 계절마다 꽃축제가 열리며 다양한 볼거리를 제공해 주는 핫플레이스 관광지입니다.",
    btnLink: "/",
  },
  {
    className: "t4",
    title: "산방산",
    desc: "서남부의 평야지대에 우뚝 서 있는 곳으로 어디서든 조망할 수 있는 아름다운 명소입니다.",
    btnLink: "/",
  },
  {
    className: "t5",
    title: "카멜리아힐",
    desc: "동양 최대 규모의 동백 수목원으로 각종 조경수와 함께 어우러진 수목원입니다.",
    btnLink: "/",
  },
  {
    className: "t6",
    title: "성읍 민속마을",
    desc: "옛 마을 형태의 민속 경관이 잘 유지되어 있어 제주도 옛 민가의 특징이 잘 간직되어 있는 곳입니다.",
    btnLink: "/",
  },
];

const TextCard = ({ className, title, desc, btnLink }) => {
  return (
    <div className={`text ${className}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text__btn" href={`${btnLink}`}>
        더보기
      </a>
    </div>
  );
};

function Text({ attr }) {
  return (
    <section
      id="textType"
      className={`text__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <span>{TextTitle.span}</span>
      <h2 className="mb70">{TextTitle.title}</h2>
      <div className={`text__inner ${attr[3]}`}>
        {TextInfo.map((text, index) => (
          <TextCard
            className={text.className}
            title={text.title}
            desc={text.desc}
            btnLink={text.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
