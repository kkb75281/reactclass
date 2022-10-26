import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteration: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="desc">
              <span>INTRODUCE</span>
              <h3>with JEJUSARI</h3>
              <p>
                제주의 옛 서까래와 빈티지 가구,
                <br />
                디자인 조명이 만나 과거의 현대가 어우러지는 공간
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>INTRODUCE</span>
              <h3>with JEJUSARI</h3>
              <p>
                제주의 옛 서까래와 빈티지 가구,
                <br />
                디자인 조명이 만나 과거의 현대가 어우러지는 공간
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>INTRODUCE</span>
              <h3>with JEJUSARI</h3>
              <p>
                제주의 옛 서까래와 빈티지 가구,
                <br />
                디자인 조명이 만나 과거의 현대가 어우러지는 공간
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
