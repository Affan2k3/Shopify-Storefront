import { CartState } from "@/globalState/context/CartContext";
import { useState } from "react";

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
        quantity: ${numberOfItems}
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
export default function IncrementButtons({ item }: { item: any }) {
  const { state, dispatch } = CartState();
  const cartItem = state.cart.find(
    (ele: any) => ele.node?.id === item?.node?.id
  );
  const [numberOfItems, setNumberOfItems] = useState(cartItem.qty);
  const lineItem = state.shopifyCart?.cart?.lines?.edges.find(
    (ele: any) => ele?.node?.merchandise?.id === item?.node?.id
  );
  const [btndisable, setBtndisable] = useState(false);
  async function decrementPerform(
    item: any,
    shopifyCart: any,
    setBtndisable: any,
    numberOfItems: number
  ) {
    if (cartItem.qty > 1) {
      // setNumberOfItems(cartItem.qty - 1);
      const quantity = cartItem.qty - 1;
      const shopifyCartRes = await incrementLineItem(
        item,
        shopifyCart,
        quantity,
        setBtndisable
      );
      // await state.ShopifyCart(shopifyCartRes.data?.cartLinesUpdate);
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          qty: quantity,
          id: item.node.id,
        },
        shopifyCartData: shopifyCartRes.data?.cartLinesUpdate,
      });
      // state.cart[cartItemIndex]["count"] = numberOfItems;
    } else {
      // removeFromCart(item);
      const quantity = 0;

      const shopifyCartRes = await incrementLineItem(
        item,
        shopifyCart,
        quantity,
        setBtndisable
      );
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          id: item.node.id,
        },
        shopifyCartData: shopifyCartRes.data?.cartLinesUpdate,
      });
      // await setShopifyCart(shopifyCartRes.data?.cartLinesUpdate);
    }
    // updatePrice("substraction", item.node.price.amount);
  }
  async function incrementPerform(
    item: any,
    shopifyCart: any,
    setBtndisable: any,
    numberOfItems: number
  ) {
    if (item.node.quantityAvailable > cartItem.qty) {
      // setNumberOfItems(cartItem.qty + 1);
      // updatePrice("addition", item.node.price.amount);
      const quantity = cartItem.qty + 1;
      const shopifyCartRes = await incrementLineItem(
        item,
        shopifyCart,
        quantity,
        setBtndisable
      );
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          qty: quantity,
          id: item.node.id,
        },
        shopifyCartData: shopifyCartRes.data?.cartLinesUpdate,
      });
      // await setShopifyCart(shopifyCartRes.data?.cartLinesUpdate);

      // state.cart[cartItemIndex]["count"] = numberOfItems;
    } else {
      alert(`Only ${item.node.quantityAvailable} Articles are Instock`);
    }
  }
  return (
    <div className="border-2 flex justify-center">
      <button
        disabled={btndisable}
        className="py-1 px-3 hover:bg-gray-200 text-center"
        onClick={() =>
          decrementPerform(
            item,
            state.shopifyCart,
            setBtndisable,
            numberOfItems
          )
        }
      >
        -
      </button>
      <div className="py-1 px-3 text-center">
        {lineItem?.node.quantity ? lineItem?.node?.quantity : 1}
      </div>
      <button
        disabled={btndisable}
        onClick={() => {
          incrementPerform(
            item,
            state.shopifyCart,
            setBtndisable,
            numberOfItems
          );
        }}
        className={`py-1 px-3 hover:bg-gray-200 text-center ${
          btndisable ? "text-gray-300" : "text-gray-800"
        }`}
      >
        +
      </button>
    </div>
  );
}
