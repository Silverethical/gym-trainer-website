interface ServiceType {
  serviceTitle: string;
  imageUrl: string;
  type?: "normal" | "special-offer" | "special-discount";
  info: { title: string; price: string; discountPrice?: string }[];
}

export const services: ServiceType[] = [
  {
    serviceTitle: "برنامه تمرین",
    imageUrl: "/images/services/sampleServicePic.png",
    info: [
      { title: "۵ هفته", price: "300 هزار تومان" },
    ],
  },
  {
    serviceTitle: "برنامه تمرین + تغذیه",
    type: "special-offer",
    imageUrl: "/images/services/sampleServicePic.png",
    info: [
      { title: "۵ هفته", price: "400 هزار تومان" },
    ],
  },
  {
    serviceTitle: "برنامه تغذیه",
    imageUrl: "/images/services/sampleServicePic.png",
    info: [
      { title: "۵ هفته", price: "150 هزار تومان" },
    ],
  },
];
