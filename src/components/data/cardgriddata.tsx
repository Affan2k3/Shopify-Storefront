import React from "react";
type product = {
  name: string;
  details: string;
  ImageURL: string;
  button: string;
  alt: string;
};

export const product = [
  {
    name: "Inspired by nature",
    details:
      "You'll find all the brands we carry here in a restored 1800's tile factory warehouse in downtown Williamsburg.",
    ImageURL: "/images/img4.webp",
    button: "Our story",
    alt: "p1",
  },
  {
    name: "James Harrison Interview",
    details:
      "You'll find our core product line here in a restored 1800's tile factory warehouse in downtown Philadelphia.",
    ImageURL: "/images/img5.webp",
    button: "Read the journal",
    alt: "p1",
  },
  {
    name: "Seasonal savings",
    details:
      "Save up to 30% on last season's apparel. Shop now while supplies last with free shipping over $100.",
    ImageURL: "/images/img6.webp",
    button: "Shop sale",
    alt: "p1",
  },
];
