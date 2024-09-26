import Button from "../Button/Button";
import { ServiceType } from "../../types/serviceType";

const ServiceCard = ({
  serviceTitle = "خدمت",
  imageUrl,
  type = "normal",
  info,
  button,
}: ServiceType) => {
  return (
    <div className="service-card" data-type={type}>
      {type === "special-discount" && (
        <div className="special-discount-banner">تخفیف ویژه</div>
      )}

      <img className="service-picture" src={imageUrl} />
      <div className="service-title">{serviceTitle}</div>
      <div className="service-info">
        {info &&
          info.map((detail, idx) => (
            <div key={idx} className="service-info-item">
              <div className="info-title">{detail.title}</div>
              <div className="info-description">
                <div
                  className="price"
                  data-type={
                    detail.discountPrice && type === "special-discount"
                      ? "discount"
                      : "normal"
                  }
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
      {button?.showButton !== false && (
        <Button
          buttonClass="get-button"
          buttonText={button?.buttonText ? button.buttonText : "تهیه"}
          variant="filled"
          data-type={type}
          href={button?.buttonLink ? button?.buttonLink : "#contact-me"}
        />
      )}
    </div>
  );
};

export default ServiceCard;
