export const CartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
        shopifyCart: { ...action.shopifyCartData },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c: any) => c.node.id !== action.payload.id),
        shopifyCart: { ...action.shopifyCartData },
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c: any) =>
          c.node.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
        shopifyCart: { ...action.shopifyCartData },
      };

    default:
      return state;
  }
};
