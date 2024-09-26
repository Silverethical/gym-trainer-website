export interface ServiceType {
  serviceTitle: string;
  imageUrl: string;
  type?: "normal" | "special-offer" | "special-discount";
  info?: { title: string; price: string; discountPrice?: string }[];
  button?: {
    showButton?: boolean;
    buttonLink?: string;
    buttonText?: string;
  };
}
