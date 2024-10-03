import { ReactElement } from "react";
import Button from "../Button/Button";
import "./HeroSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const loopTextArray: ReactElement[] = [];

for (let i = 0; i < 15; i++) {
  loopTextArray.push(
    <SwiperSlide key={i} className="loop-text">
      FATEMEH HEYDARI
    </SwiperSlide>,
  );
}

const HeroSection = () => {
  return (
    <>
      <section id="hero-section">
        <div id="hero-section-wrapper" className="container">
          <div id="hero-section-right-side">
            <div id="hero-section-text-wrapper">
              <div className="hero-section-text-wrapper-right">
                <span className="hero-section-text-primary">
                  آنچه میخواهــی
                </span>
                <span className="hero-section-text-secondary">
                  در آیینه ببیـــنی
                </span>
              </div>
              <div className="hero-section-text-primary hero-section-text-wrapper-left">
                باش
              </div>
            </div>
            <div id="hero-section-button-wrapper">
              <Button
                buttonClass="hero-section-buttons"
                buttonText="تماس با من"
                variant="filled"
                href="#contact-me"
              />
              <Button
                buttonClass="hero-section-buttons"
                buttonText="مشاهده خدمات"
                variant="outlined"
                href="#services"
              />
            </div>
          </div>
          <div id="hero-section-left-side">
            <div id="hero-section-image-wrapper">
              <img
                src="/images/general/hero-section-image.png"
                id="hero-section-image"
              />
              <img
                src="/images/general/hero-section-image-shadow.png"
                id="hero-section-image-shadow"
              />
            </div>
          </div>
        </div>
      </section>
      <Swiper
        className="infintie-scroll"
        slidesPerView="auto"
        spaceBetween={18}
        loop={true}
        speed={5000}
        allowTouchMove={false}
				freeMode={true}
				centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
      >
        {loopTextArray}
      </Swiper>
    </>
  );
};

export default HeroSection;
