import "./services.scss";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services">
      <h2 className="title">خدمات</h2>
      <div id="services-wrapper">
        <ServiceCard
          info={[
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            {
              title: "2 روز در هفته",
              price: "600 هزار تومان",
              discountPrice: "400 هزار تومان",
            },
          ]}
          type="special-discount"
          imageUrl="../../../public/images/services/sampleServicePic.png"
        />
        <ServiceCard
          info={[
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
          ]}
          type="special-offer"
          imageUrl="../../../public/images/services/sampleServicePic.png"
        />
        <ServiceCard
          imageUrl="../../../public/images/services/sampleServicePic.png"
          info={[
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
            { title: "2 روز در هفته", price: "600 هزار تومان" },
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
