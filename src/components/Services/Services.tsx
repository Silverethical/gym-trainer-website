import "./services.scss";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="title">خدمات</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          id="services-wrapper"
          breakpoints={{
            1040: {
              slidesPerView: 3,
            },
            720: {
              slidesPerView: 2,
            },
            360: {
              slidesPerView: 1,
            },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <ServiceCard
                info={service.info}
                serviceTitle={service.serviceTitle}
                imageUrl={service.imageUrl}
                type={service.type}
                button={service.button}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
