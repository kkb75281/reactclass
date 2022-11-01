import React from "react";

const ImgTextInfo = {
  blind: "유용한 사이트 살펴보기",
  span: "STAY",
  title: "JEJU sari Interior",
  desc: "모던하고 아늑한 분위기로 제주 자연의 따뜻함과 청량함을 객실에 그대로 담았습니다.",
  a1: "Deluxe",
  a2: "Deluxe Family",
  a3: "Premier",
  a4: "Premier Family",
  a5: "Junior Suite",
  a6: "Junior Suite Family",
  btnLink: "/",
};

const ImgText = [
  {
    img: "img1",
    btn: "Deluxe",
    btnLink: "/",
  },
  {
    img: "img2",
    btn: "Deluxe Family",
    btnLink: "/",
  },
];

const ImgTextCard = ({ img, btn, btnLink }) => {
  return (
    <div className={`imgText__img ${img}`}>
      <a href={`${btnLink}`}>{btn}</a>
    </div>
  );
};

function Imagetext({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}
    >
      <h2 className="blind">{ImgTextInfo.blind}</h2>
      <div className={`imgText__inner ${attr[4]}`}>
        <div className="imgText__txt">
          <span>{ImgTextInfo.span}</span>
          <h3>{ImgTextInfo.title}</h3>
          <p>{ImgTextInfo.desc}</p>
          <ul>
            <li>
              <a href={`${ImgTextInfo.btnLink}`}>{ImgTextInfo.a1}</a>
            </li>
            <li>
              <a href={`${ImgTextInfo.btnLink}`}>{ImgTextInfo.a2}</a>
            </li>
            <li>
              <a href={`${ImgTextInfo.btnLink}`}>{ImgTextInfo.a3}</a>
            </li>
            <li>
              <a href={`${ImgTextInfo.btnLink}`}>{ImgTextInfo.a4}</a>
            </li>
            <li>
              <a href={`${ImgTextInfo.btnLink}`}>{ImgTextInfo.a5}</a>
            </li>
            <li>
              <a href={`${ImgTextInfo.btnLink}`}>{ImgTextInfo.a6}</a>
            </li>
          </ul>
        </div>
        {ImgText.map((img, index) => (
          <ImgTextCard
            key={index}
            img={img.img}
            btn={img.btn}
            btnLink={img.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Imagetext;
