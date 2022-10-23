import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        const product = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCartQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuantity } = cartItem;
          const itemTotal = price * itemQuantity;

          cartTotal.total += itemTotal;

          cartTotal.quantity += itemQuantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCartQuantity,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
