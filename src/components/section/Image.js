import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
    >
      <h2>Premier</h2>
      <p>
        넓은 잔디가 있는 마당과 편안한 휴식을 즐길 수 있는 야외 수영장이
        즐거움을 줍니다.
      </p>
      <div className={`image__inner  ${props.attr[3]}`}>
        <article className="image img1">
          <h3 className="image__title">
            <em>with</em> GARDEN
          </h3>
          <p className="image__desc">
            어느 객실에서나 광활한 원시림을 마주합니다. 숲에 안겨 있는
            레스트리처럼 몸과 마음을 맡긴채 온전한 자유를 누려보세요.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            more
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">
            <em>with</em> POOL
          </h3>
          <p className="image__desc">
            탁트인 풍경과 함께하는 독채수영장은 남녀노소 편안한 휴식과 즐거움을
            극대화하는 JEJU sari 만의 특색입니다.
          </p>
          <a className="image__btn gray" href="/" title="자세히 보기">
            more
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
