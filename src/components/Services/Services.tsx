import "./services.scss";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const Services = () => {
  return (
    <div id="services">
      <h2 className="title">خدمات</h2>
      <div id="services-wrapper">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            info={service.info}
            serviceTitle={service.serviceTitle}
            imageUrl={service.imageUrl}
            type={service.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
