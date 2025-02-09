import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categoriesSlice.ts";
import itemsReducer from "../features/itemsSlice.ts";
import cartReducer from '../features/cartSlice.ts'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    items: itemsReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
