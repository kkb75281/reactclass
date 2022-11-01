import React from "react";

const ImageTitle = {
  title: "Premier",
  desc: "넓은 잔디가 있는 마당과 편안한 휴식을 즐길 수 있는 야외 수영장이 즐거움을 줍니다.",
};

const ImageText = [
  {
    title: "with GARDEN",
    desc: "어느 객실에서나 광활한 원시림을 마주합니다. 숲에 안겨 있는 레스트리처럼 몸과 마음을 맡긴채 온전한 자유를 누려보세요.",
    imgClass: "img1",
    btnLink: "/",
  },
  {
    title: "with POOL",
    desc: "탁트인 풍경과 함께하는 독채수영장은 남녀노소 편안한 휴식과 즐거움을 극대화하는 JEJU sari 만의 특색입니다.",
    imgClass: "img2",
    btnLink: "/",
  },
];

const ImageInner = ({ title, desc, imgClass, btnLink }) => {
  return (
    <article className={`image ${imgClass}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a className="image__btn" href={`${btnLink}`} title="자세히 보기">
        more
      </a>
    </article>
  );
};

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
    >
      <h2>{ImageTitle.title}</h2>
      <p>{ImageTitle.desc}</p>

      <div className={`image__inner  ${props.attr[3]}`}>
        {ImageText.map((img, index) => (
          <ImageInner
            key={index}
            title={img.title}
            desc={img.desc}
            imgClass={img.imgClass}
            btnLink={img.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
