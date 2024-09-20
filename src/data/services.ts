interface ServiceType {
  serviceTitle: string;
  imageUrl: string;
  type?: "normal" | "special-offer" | "special-discount";
  info: { title: string; price: string; discountPrice?: string }[];
}

export const services: ServiceType[] = [
  {
    serviceTitle: "خدمت",
    info: [
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      {
        title: "2 روز در هفته",
        price: "600 هزار تومان",
        discountPrice: "400 هزار تومان",
      },
    ],
    type: "special-discount",
    imageUrl: "../../../public/images/services/sampleServicePic.png",
  },
  {
    serviceTitle: "خدمت",
    info: [
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      {
        title: "2 روز در هفته",
        price: "600 هزار تومان",
      },
    ],
    type: "special-offer",
    imageUrl: "../../../public/images/services/sampleServicePic.png",
  },
  {
    serviceTitle: "خدمت",
    type: "normal",
    info: [
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      {
        title: "2 روز در هفته",
        price: "600 هزار تومان",
      },
    ],
    imageUrl: "../../../public/images/services/sampleServicePic.png",
  },
  {
    serviceTitle: "خدمت",
    type: "normal",
    info: [
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      { title: "2 روز در هفته", price: "600 هزار تومان" },
      {
        title: "2 روز در هفته",
        price: "600 هزار تومان",
      },
    ],
    imageUrl: "../../../public/images/services/sampleServicePic.png",
  },
];
