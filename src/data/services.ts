import { ServiceType } from "../types/serviceType";

export const services: ServiceType[] = [
  {
    serviceTitle: "برنامه تمرین",
    imageUrl: "/images/services/training.jpg",
    info: [
      { title: "۵ هفته", price: "300 هزار تومان" },
    ],
  },
  {
    serviceTitle: "برنامه تمرین + تغذیه",
    type: "special-offer",
    imageUrl: "/images/services/training_with_diet.jpg",
    info: [
      { title: "۵ هفته", price: "400 هزار تومان" },
    ],
  },
  {
    serviceTitle: "برنامه تغذیه",
    imageUrl: "/images/services/diet.jpg",
    info: [
      { title: "۵ هفته", price: "150 هزار تومان" },
    ],
  },
];
