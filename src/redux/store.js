import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { productsApi } from "./services/productsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
