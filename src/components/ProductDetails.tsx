"use client";
import { CartState } from "@/globalState/context/CartContext";
import { useEffect, useReducer, useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AskQuestionForm from "./AskQuestionForm";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import MoreDetails from "./MoreDetails";
import SizeChart from "./SizeChart";

function matchSizeForColors(selectedSize: string, item: any) {
  if (item.data.sizes.value == selectedSize) {
    return true;
  }
}

type Props = {
  images: string[];
  video?: string;
  videoStatus: boolean;
  data: any;
};

export async function createShopifyCart(variant: any) {
  const variantId = JSON.stringify(variant?.node.id);
  const queryForCartCreation = `mutation {
    cartCreate(
      input: {
        lines: [
          {
            quantity: 1
            merchandiseId:${variantId}
          }
        ],
      }
    ) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        buyerIdentity {
          deliveryAddressPreferences {
            __typename
          }
        }
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForCartCreation }),
  });
  return res.json();
}

export async function updateShopifyCart(variant: any, shopifyCart: any) {
  const variantId = JSON.stringify(variant.node.id);
  const cartId = JSON.stringify(shopifyCart?.cart?.id);

  const queryForUpdateShopifyCart = `mutation {  
    cartLinesAdd(
      cartId: ${cartId}
        lines: [
       {
            quantity: 1
            merchandiseId: ${variantId}
          }
    ]
    ) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForUpdateShopifyCart }),
  });
  return res.json();
}

export async function checkout(shopifyCart: any) {
  const cartId = JSON.stringify(shopifyCart?.cart?.id);
  const queryForCheckout = `query checkoutURL {
    cart(id: ${cartId}) {
      checkoutUrl
    }
  }
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForCheckout }),
  });
  return res.json();
}

export async function incrementLineItem(
  item: any,
  shopifyCart: any,
  numberOfItems: number,
  setBtndisable: any
) {
  const cartId = shopifyCart?.cart?.id;
  const lineItem = shopifyCart?.cart?.lines?.edges.find(
    (ele: any) => ele?.node?.merchandise?.id === item?.node?.id
  );
  setBtndisable(true);
  const lineItemId = lineItem?.node.id;

  const queryForLineItemsUpdate = `mutation {
    cartLinesUpdate(
      cartId: ${JSON.stringify(cartId)}
      lines: {
        id: ${JSON.stringify(lineItemId)}
        quantity: ${numberOfItems + 1}
        }
    ) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForLineItemsUpdate }),
  });
  let parsedCartData = await res.json();
  if (!parsedCartData.errors) {
    setTimeout(() => {
      setBtndisable(false);
    }, 500);
  }
  return parsedCartData;
}

function ProductDetails({ data, videoStatus, video }: Props) {
  const [colorsFiltrationData, dispatchColorsFiltrationData] = useState<any>(
    []
  );

  function checkIfPreviousSizeExsits(extractedSizeValue: any): boolean {
    if (
      extractedSizeValue ==
      colorsFiltrationData.map((elem: any) => {
        return elem.data.sizes.value;
      })
    ) {
      return false;
    } else {
      return true;
    }
  }

  function ProductDetailsHelperFunctionss() {
    if (colorsFiltrationData) {
      data.node.variants.edges.forEach(async (item: any) => {
        let extractedPrice = item.node.price.amount;

        let extractedSizeValue = item.node.selectedOptions.map((hi: any) => {
          if (hi.name == "Size") {
            return hi.value; //36 || S || M
          }
        })[0];
        let extractedSizeName = item.node.selectedOptions
          .map((elem: any) => {
            if (elem.name == "Size") {
              return elem.name; //Size
            }
          })
          .toString();
        extractedSizeName = extractedSizeName.slice(
          0,
          extractedSizeName.length - 1
        );

        let extractedColorName = item.node.selectedOptions
          .map((elem: any) => {
            if (elem.name == "Color") {
              return elem.name; //Color
            }
          })
          .toString();
        extractedColorName = extractedColorName.slice(1);

        let extractedColorValue = item.node.selectedOptions
          .map((elem: any) => {
            if (elem.name == "Color") {
              return elem.value; //Red || Black
            }
          })
          .toString();
        extractedColorValue = extractedColorValue.slice(1);
        if (checkIfPreviousSizeExsits(extractedSizeValue)) {
          let dataToSend = {
            data: {
              sizes: {
                name: extractedSizeName,
                value: extractedSizeValue,
              },
              colors: [
                {
                  name: extractedColorName,
                  value: extractedColorValue,
                  price: extractedPrice,
                },
              ],
            },
          };
          dispatchColorsFiltrationData((prev: any) => [...prev, dataToSend]);
        } else {
          dispatchColorsFiltrationData((prev: any) => {
            let raw = item.node.selectedOptions
              .map((elem: any) => {
                if (elem.name == "Size") {
                  return elem.value;
                }
              })
              .toString();
            raw = raw.slice(0, raw.length - 1);

            let rawDataToSend = prev
              .map((subItem: any) => {
                if (subItem.data.sizes.value == raw) {
                  return subItem.data.colors;
                }
              })
              .flat(2);
            return [
              {
                data: {
                  sizes: {
                    name: extractedSizeName,
                    value: extractedSizeValue,
                  },
                  colors: [
                    rawDataToSend[1],
                    {
                      name: extractedColorName,
                      value: extractedColorValue,
                      price: extractedPrice,
                    },
                  ],
                },
              },
            ];
          });
        }
      });
    }
  }
  const [sedisabled, setsedisabled] = useState(false);
  if (!sedisabled) {
    setsedisabled(true);
    ProductDetailsHelperFunctionss();
  }

  const [isOpened1, setOpened1] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const [priceStratigies, setPriceStratigies] = useState("");
  const [title, setTitle] = useState();
  const [variant, setVariant] = useState("");
  const [size, setSize] = useState("");
  const [btndisable, setBtndisable] = useState(false);
  const [SelectedColor, setSelectedColor] = useState<string>("");
  const { state, dispatch } = CartState();
  const [selected, setSelected] = useState({
    type: "video",
    src: "video.mp4",
  });
  const [disableToSetAgainVarients, setDisableToSetAgainVarients] =
    useState(true);

  const initialImages = [
    data?.node?.images.edges[0]?.node.url,
    data?.node?.images.edges[1]?.node.url,
    data?.node?.images.edges[2]?.node.url,
  ];

  const [images, setImages] = useState(initialImages);
  useEffect(() => {
    let variantt;
    if (data?.node?.variants.edges[0].node.selectedOptions.length == 2) {
      variantt = data?.node?.variants.edges?.find(
        (ele: any) =>
          ele.node.title.split(" ")[0] == size &&
          ele.node.selectedOptions[1].value === SelectedColor
      );
    } else {
      variantt = data?.node?.variants.edges?.find(
        (ele: any) => ele.node.title.split(" ")[0] == size
      );
    }
    setTitle(data?.node?.title);
    setVariant(variantt);
    if (videoStatus === false) {
      setSelected({ type: "image", src: images[0] });
    }
  }, [size, SelectedColor]);

  async function handleBuyItNow(variant: any, shopifyCart: any) {
    let handleDuplicates = state.cart.find(
      (cartItem: any) => cartItem.node?.id === variant.node?.id
    );
    if (
      !handleDuplicates ||
      variant.node.quantityAvailable > handleDuplicates.qty
    ) {
      const updatedShopifyCart = await handleAddToCart(variant, shopifyCart);
      const shopifyCheckoutRes = await checkout(updatedShopifyCart);
      const checkoutLink = shopifyCheckoutRes?.data?.cart?.checkoutUrl;
      window.open(checkoutLink);
    } else {
      alert(`Only ${variant.node.quantityAvailable} Articles are Instock`);
    }
  }

  async function handleAddToCart(variant: any, shopifyCart: any) {
    let handleDuplicates = state.cart.find(
      (cartItem: any) => cartItem.node?.id === variant.node?.id
    );
    if (handleDuplicates) {
      if (variant.node.quantityAvailable > handleDuplicates.qty) {
        const shopifyCartRes = await incrementLineItem(
          variant,
          shopifyCart,
          handleDuplicates.qty,
          setBtndisable
        );
        dispatch({
          type: "CHANGE_CART_QTY",
          payload: {
            qty: handleDuplicates.qty + 1,
            id: variant.node.id,
          },
          shopifyCartData: shopifyCartRes.data.cartLinesUpdate,
        });
        return shopifyCartRes.data.cartLinesUpdate;
      } else {
        alert(`Only ${variant.node.quantityAvailable} Articles are Instock`);
      }
    } else {
      if (state.cart.length === 0 && Object.entries(shopifyCart).length === 0) {
        const shopifyCartRes = await createShopifyCart(variant);
        dispatch({
          type: "ADD_TO_CART",
          payload: { ...variant, size, title, images },
          shopifyCartData: shopifyCartRes?.data?.cartCreate,
        });
        return shopifyCartRes.data.cartCreate;
      } else {
        const cartUpdateRes = await updateShopifyCart(variant, shopifyCart);
        dispatch({
          type: "ADD_TO_CART",
          payload: { ...variant, size, title, images },
          shopifyCartData: cartUpdateRes.data?.cartLinesAdd,
        });
        return cartUpdateRes.data?.cartLinesAdd;
      }
    }
  }

  const [Ring, setRing] = useState<any>([]);
  const [colorAvailable, setColorAvailable] = useState("available");
  const [colorAvailableBool, setColorAvailableBool] = useState(true);

  useEffect(() => {
    if (disableToSetAgainVarients) {
      if (colorsFiltrationData) {
        setSize(colorsFiltrationData[0].data.sizes.value);
        setSelectedColor(colorsFiltrationData[0].data.colors[0].value);
        setPriceStratigies(colorsFiltrationData[0].data.colors[0].price);
        // data.node.variants.edges[0].node.price.amount
      }
      setDisableToSetAgainVarients(false);
    }
    if (colorsFiltrationData) {
      for (let index = 0; index < colorsFiltrationData.length; index++) {
        setRing((prev: any) => [
          ...prev,
          colorsFiltrationData[index].data.sizes.value,
        ]);
      }
    }
  }, [colorsFiltrationData]);

  const [dafy, setDafy] = useState<any>();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setDafy(Array.from(new Set(Ring)));
  }, [Ring]);
  function setColorAppearence(value: any) {
    if (colorAvailableBool) {
      setColorAvailableBool(false);
      if (value) {
        setColorAvailable("available");
      } else {
        setColorAvailable("unAvailable");
      }
    }
  }
  function handleSizeFunc(item: any, colorsFiltrationDatas: any) {
    setSize(item);
    colorsFiltrationDatas.map((subItem: any) => {
      if (item == subItem.data.sizes.value) {
        if (
          SelectedColor ==
          subItem.data.colors.map((subSubItem: any) => {
            return subSubItem.value;
          })
        ) {
          setPriceStratigies(subItem.data.colors[0].price);
        }
      }
    });
  }

  function handleColorFunc(price: any, value: any) {
    setPriceStratigies(price);
    setSelectedColor((prev: any) => value);
    setAllowed(true);
  }

  function sendResponseInFormBoolToCheckColorPic(data: any) {
    let indexes = data.node.selectedOptions;
    for (let index = 0; index < indexes.length; index++) {
      if (indexes[index].value == SelectedColor) {
        return true;
        break;
      } else if (indexes.length - 1 == index) {
        return false;
      }
    }
    return true;
  }
  useEffect(() => {
    if (allowed) {
      data.node.variants.edges.map((item: any) => {
        if (sendResponseInFormBoolToCheckColorPic(item)) {
          setImages([item.node.image.url]);
        }
      });
    }
  }, [SelectedColor]);
  useEffect(() => {
    setSelected({ type: "image", src: images[0] });
  }, [images]);

  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 lg:px-12 ">
      <div className="basis-1/2 flex flex-row-reverse lg:flex-row lg:px-2 space-x-4 self-start static lg:sticky top-0 md:w-full ">
        <div className="flex flex-col lg:items-end items-start md:items-center px-4 lg:pl-0 space-y-4 basis-1/4 ">
          {videoStatus && (
            <div className="relative cursor-pointer">
              {video && (
                <img
                  src={images[2]}
                  alt=""
                  onClick={() => setSelected({ type: "video", src: video })}
                  className={`w-[100px] ${
                    selected.type == "video" ? "ring-2 ring-black" : ""
                  }`}
                />
              )}
              <img
                className="absolute top-1 right-1 w-[25px] h-[25px] "
                src="https://img.icons8.com/ios-filled/256/play-button-circled.png"
              />
            </div>
          )}
          {images.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                alt=""
                onClick={() => setSelected({ type: "image", src: image })}
                className={`w-[100px] cursor-pointer ${
                  selected.src == image ? "ring-2 ring-black" : ""
                }`}
              />
            );
          })}
        </div>

        <div className="basis-3/4">
          {selected.type == "image" && (
            <img className="w-full" src={selected.src} />
          )}
          {selected.type == "video" && (
            <video loop autoPlay muted className="w-full">
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      <div className="basis-1/2 flex flex-col space-y-4 mt-6 lg:mt-0 px-4 lg:px-0">
        <h3 className="text-3xl font-bold">{data ? data?.node?.title : ""}</h3>
        <p className="text-xl tracking-[2px]">
          {"$"}
          {`${priceStratigies}`}
        </p>
        <hr className="bg-gray-300" />
        <p className="text-lg uppercase font-semibold w-full">Size</p>
        <div className="flex space-x-4 flex-wrap">
          {dafy &&
            dafy.map((item: any, index: number) => {
              return (
                <button
                  aria-label="for selecting color"
                  key={index + 33243}
                  className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0
                    ${
                      size == `${item}`
                        ? "ring-black ring-2"
                        : "ring-1 ring-gray-300"
                    }`}
                  onClick={() => {
                    handleSizeFunc(item, colorsFiltrationData);
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>
        <div className="basis-1/2 flex flex-col space-y-4 mt-6 lg:mt-0 px-4 lg:px-0">
          {colorAvailable == "available" && (
            <p className="text-lg uppercase font-semibold w-full">Color</p>
          )}
          {colorAvailable == "available" && (
            <div className="flex space-x-4">
              {colorsFiltrationData.map((item: any) => {
                if (matchSizeForColors(size, item)) {
                  return item.data.colors.map((item: any, index: number) => {
                    setColorAppearence(item.value);
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundColor: `${
                            item.value ? item.value : "black"
                          }`,
                        }}
                        className={`cursor-pointer w-[40px] h-[40px] bg-blue-500 ring-black 
                  ${SelectedColor == item.value ? "ring-2" : "ring-0"}
                   border border-white`}
                        onClick={() => {
                          handleColorFunc(item.price, item.value);
                        }}
                      />
                    );
                  });
                }
              })}
            </div>
          )}
        </div>
        <button
          className={`w-full overflow-hidden group text-center ring-1 py-5 text-lg font-bold flex items-center ${
            btndisable ? "ring-gray-200" : "ring-black"
          }`}
          onClick={() => handleAddToCart(variant, state.shopifyCart)}
          disabled={btndisable}
        >
          <p className="flex-grow group-hover:-translate-x-8 transition duration-200">
            Add to Cart
          </p>
          <div className="w-[20px] translate-x-8 group-hover:-translate-x-20 duration-300 invisible group-hover:inline-flex group-hover:visible">
            <FaLongArrowAltRight />
          </div>
        </button>

        <button
          className="w-full text-center text-white bg-black py-3 text-lg font-bold"
          onClick={async () => handleBuyItNow(variant, state.shopifyCart)}
        >
          Buy it now
        </button>
        <p className="italic tracking-[1px]">
          This is a demonstration store. You can purchase products like this
          from United By Blue
        </p>
        <p className="">
          Like your well-worn pair of jeans in short-sleeve button down form.
          Features an understated plus-sign pattern.
        </p>
        <ul className="list-disc ml-8">
          <li>All-over print </li>
          <li>Full button down placket and collar </li>
          <li>Front left patch pocket </li>
          <li>Natural corozo buttons throughout</li>
          <li>Curved hemline</li>
        </ul>
        <div className="mt-4 bg-white border-b  pb-5">
          <div
            onClick={() => setOpened(!isOpened)}
            className="flex pt-4 justify-between cursor-pointer"
          >
            <h2 className="uppercase font-bold text-sm">Size Chart</h2>
            <ChevronDownIcon
              className={`w-5 h-5 transition-all duration-500 ${
                isOpened ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`overflow-hidden  transition-max-height ease-in-out duration-[600ms]  ${
              isOpened ? "max-h-96" : "max-h-0"
            }`}
          >
            <div
              className={` ease-in-out duration-[600ms] pt-4 ${
                isOpened
                  ? `translate-y-0  opacity-100`
                  : "translate-y-5  opacity-0"
              }`}
            >
              <div
                className={`grid grid-cols-4 text-sm  transition-all duration-500 border-collapse`}
              >
                <h2 className="border border-gray-200 p-2 font-semibold col-span-2 mb-[-1px] mr-[-1px]">
                  United States
                </h2>
                <h2 className="border-[1px] border-gray-200 p-2 mb-[-1px] font-semibold mr-[-1px]">
                  UK
                </h2>
                <h2 className="border-[1px] border-gray-200 p-2 mb-[-1px] font-semibold">
                  Europe
                </h2>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  0
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px] ">
                  Extra small
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  4
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] ">
                  32
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  0
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  Extra small
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  4
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] ">
                  32
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  0
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  Extra small
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] mr-[-1px]">
                  4
                </p>
                <p className=" border-[1px] border-gray-200 p-2 mb-[-1px] ">
                  32
                </p>
                <p className=" border-[1px] border-gray-200 p-2  ">0</p>
                <p className=" border-[1px] border-gray-200 p-2  ">
                  Extra small
                </p>
                <p className=" border-[1px] border-gray-200 p-2  ">4</p>
                <p className=" border-[1px] border-gray-200 p-2  ">32</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white border-b  pb-5">
          <div
            onClick={() => setOpened1(!isOpened1)}
            className="flex pt-4 justify-between cursor-pointer"
          >
            <h2 className="uppercase font-bold text-sm">Ask a Question</h2>
            <ChevronDownIcon
              className={`w-5 h-5 transition-all duration-500 ${
                isOpened1 ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`overflow-hidden  transition-max-height ease-in-out duration-[600ms]  ${
              isOpened1 ? "max-h-96" : "max-h-0"
            }`}
          >
            <div
              className={` ease-in-out duration-[600ms] pt-4 ${
                isOpened1
                  ? `translate-y-0  opacity-100`
                  : "translate-y-5  opacity-0"
              }`}
            >
              <form className="grid grid-cols-2 gap-x-4 gap-y-8 mb-4">
                <div className="space-y-3 ">
                  <p className="text-sm font-light">Name</p>
                  <input
                    type="text"
                    className="px-1 w-full py-2 outline-none border text-lg ring-gray-200 focus:ring-black"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-light">Email</p>
                  <input
                    type="text"
                    className="px-3 py-2 w-full outline-none border text-lg ring-gray-200 focus:ring-black"
                  />
                </div>
                <div className="col-span-2 space-y-3">
                  <p className="text-sm font-light">Message</p>
                  <textarea className="px-3 py-2 w-full min-h-[150px] outline-none border text-lg ring-gray-200 focus:ring-black" />
                </div>
                <div className="col-span-2">
                  <button className="px-7 py-3 bg-black text-white font-bold">
                    Send
                  </button>
                </div>
                <p className="col-span-full text-sm">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
