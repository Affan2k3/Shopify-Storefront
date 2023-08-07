import { ProductDataType } from "../AllMensData";

export interface contextType {
  cart: Array<ProductDataType>;
  addToCart: (item: ProductDataType) => void;
  removeFromCart: (item: ProductDataType) => void;
  price: number;
  updatePrice: (action: string, updatedPrice: string) => void;
  navbarcolor: boolean;
  setNavbarcolor: (item: any) => void;
  allProductData: any;
  shopifyCart: any;
  setShopifyCart: any;
}
