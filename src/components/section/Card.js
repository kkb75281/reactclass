import React from "react";

const CardTitle = {
  title: "FACILITIES",
  desc: "새로운 경험을 배울 수 있는 공간에서 진정한 휴식을 만끽하시길 바랍니다.",
};

const CardText = [
  {
    img: "card_bg01_01",
    title: "Family Lounge",
    desc: "가족과 함께하는 여행, 편안한 휴식을 선사하고자 합니다. 패밀리 라운지는 오션뷰가 아름다운 라운지 공간과 컬러풀한 디자인으로 마련된 어린이 클래스 공간으로 나눠져 있습니다.",
    btnLink: "/",
  },
  {
    img: "card_bg01_02",
    title: "Outdoor Pool",
    desc: "제주 바다의 푸르름, 파도소리와 어우러지는 음악은 여정을 더욱 즐겁게 만듭니다. 청정한 공기로 가득한 휴식공간에서 자쿠지의 따뜻함에 기대 푸른 별을 바라보면, 휴식의 진정한 본질을 깨달을 수 있습니다.",
    btnLink: "/",
  },
  {
    img: "card_bg01_03",
    title: "Meeting Room",
    desc: "프라이빗하고 고급스러운 분위기의 미팅룸으로 임원 미팅 및 VIP 행사에 적합합니다. 소그룹부터 대그룹의 인원까지 수용가능하며 미팅룸으로",
    btnLink: "/",
  },
];

const CardInner = ({ img, title, desc, btnLink }) => {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={`assets/img/${img}.jpg`} alt={`${title}`} />
      </figure>
      <div className="card__body">
        <h3 className="tit">{title}</h3>
        <p className="desc">{desc}</p>
        <a href={`${btnLink}`}>
          더 자세히 보기
          <span aria-hidden="true">
            <svg
              width="65"
              height="8"
              viewBox="0 0 65 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0L0 4.5Z"
                fill="black"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
};

function Card({ attr }) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2>{CardTitle.title}</h2>
      <p>{CardTitle.desc}</p>

      <div className={`card__inner ${attr[3]}`}>
        {CardText.map((card, index) => (
          <CardInner
            key={index}
            img={card.img}
            title={card.title}
            desc={card.desc}
            btnLink={card.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
