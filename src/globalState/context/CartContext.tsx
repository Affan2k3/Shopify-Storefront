import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { queryForGettingAllProducts } from "@/components/querys/QueryForGettingAllProducts";
import { CartReducer } from "@/globalState/reducer/CartReducer";
import { AiOutlineConsoleSql } from "react-icons/ai";

const CartContext = createContext<any | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarcolor, setNavbarcolor] = useState(false);

  function setValue(state: string, action: { type: string, data: any }) {
    if (action.type == "update") {
      let uniqueToGetOfNavSubMenu = localStorage.setItem("uniqueToGetOfNavSubMenu", action.data);
      return localStorage.getItem("uniqueToGetOfNavSubMenu");
    }
    return state;
  }
  let issueSolver = typeof window !== "undefined" ? localStorage.getItem("uniqueToGetOfNavSubMenu") : "data1";
  const [valueToSearchFromNavbar, setValueToSearchFromNavbar] = useReducer<any>(setValue, issueSolver);

  const initialState = {
    cart: [],
    shopifyCart: {},
    products: {},
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    let localCartData = localStorage.getItem("localCart") as string;
    let shopifyCartData = localStorage.getItem("shopifyCart") as string;

    if (localCartData == null && shopifyCartData == null) {
      localStorage.setItem("localCart", JSON.stringify(state.cart));
      localStorage.setItem("shopifyCart", JSON.stringify(state.shopifyCart));
    } else {
      initialState.cart = JSON.parse(localCartData);
      initialState.shopifyCart = JSON.parse(shopifyCartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state.cart));
    localStorage.setItem("shopifyCart", JSON.stringify(state.shopifyCart));
  }, [state.cart, state.shopifyCart]);

  const data = async () => {
    const productData = await getAllProductsDataFromAPI();
    initialState.products = productData;
  };
  data();

  return (
    <CartContext.Provider
      value={{ valueToSearchFromNavbar, setValueToSearchFromNavbar, state, dispatch, setNavbarcolor, navbarcolor }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const CartState = () => {
  return useContext(CartContext);
};

const getAllProductsDataFromAPI = async () => {
  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let response = await fetch(url, {
    cache: "no-store",
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForGettingAllProducts }),
  });
  return response.json();
};