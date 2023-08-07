export interface AllProductType {
  data: {
    collection: {
      handle: "male" | "female";
      products: ProductType;
    };
  };
}

export interface ProductType {
  edges: {
    node: {
      variants: VariantsType;
      handle: string;
      images: {
        edges: {
          node: {
            url: string;
          };
        }[];
      };
      id: string;
      title: string;
      description: string;
    };
  }[];
}

export interface VariantsType {
  edges: {
    node: {
      id: string;
      title: string;
      price: {
        amount: number;
        currencyCode: string;
      };
      sku: string;
    };
  }[];
}
export {};
