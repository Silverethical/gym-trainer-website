interface ServiceType {
  serviceTitle: string;
  imageUrl: string;
  type: "normal" | "special-offer" | "special-discount";
  info: { title: string; price: string; discountPrice?: string }[];
}

import Button from "../Button/Button";

const ServiceCard = ({
  serviceTitle = "خدمت",
  imageUrl,
  type = "normal",
  info,
}: ServiceType) => {
  return (
    <div className="service-card" data-type={type}>
      {type === "special-discount" && (
        <div className="special-discount-banner">تخفیف ویژه</div>
      )}

      <img className="service-picture" src={imageUrl} />
      <div className="service-title">{serviceTitle}</div>
      <div className="service-info">
        {info.map((detail, idx) => (
          <div key={idx} className="service-info-item">
            <div className="info-title">{detail.title}</div>
            <div className="info-description">
              <div
                className="price"
                data-type={detail.discountPrice ? "discount" : "normal"}
              >
                {detail.price}
              </div>
              {type === "special-discount" && (
                <div className="discount-price">{detail.discountPrice}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        buttonClass="get-button"
        buttonText="تهیه"
        variant="filled"
        data-type={type}
        href="#contact-me"
      />
    </div>
  );
};

export default ServiceCard;
