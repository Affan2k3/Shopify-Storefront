export interface ImageDataType {
  imageUrl: string;
  label: string;
  href?: string;
  colSpan: string;
  TabColStart: string;
  TabColSpanEnd: string;
  maxHeight: boolean;
}

export const ImageData: Array<ImageDataType> = [
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2091/0251/collections/mens-Stocksy_txpd2ea9debXoZ100_Medium_222225-edited_1512x.jpg?v=1500224081",
    label: "Men",
    href: "/allmens/male",
    colSpan: "col-span-2",
    TabColStart: "sm:col-start-1",
    TabColSpanEnd: "sm:col-end-3",
    maxHeight: true,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2091/0251/collections/pullovers_720x.jpg?v=1500223091",
    label: "Pullovers",
    TabColStart: "",
    colSpan: "",
    TabColSpanEnd: "",
    maxHeight: false,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2091/0251/collections/bags_720x.jpg?v=1500223658",
    label: "Bags",
    colSpan: "",
    TabColStart: "",
    TabColSpanEnd: "",
    maxHeight: false,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2091/0251/collections/camp_720x.jpg?v=1500223599",
    label: "Camp",
    colSpan: "",
    TabColStart: "",
    TabColSpanEnd: "",
    maxHeight: false,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2091/0251/collections/backpacks_720x.jpg?v=1500223563",
    label: "Backpacks",
    colSpan: "",
    TabColStart: "",
    TabColSpanEnd: "",
    maxHeight: false,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/2091/0251/collections/womens-edited_1512x.jpg?v=1500224178",
    label: "Women",
    href: "/allmens/female",
    colSpan: "col-span-2",
    TabColStart: "sm:col-start-3",
    TabColSpanEnd: "sm:col-end-5",
    maxHeight: true,
  },
];
