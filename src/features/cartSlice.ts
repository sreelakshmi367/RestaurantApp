import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItemToCart: (state, action) => {
        const { id, quantity, selectedSides } = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
  
        if (existingItem) {
          existingItem.quantity += quantity;
          existingItem.addons = [
            ...(existingItem.addons || []),
            ...(selectedSides || []),
          ];
        } else {
          state.items.push(action.payload);
        }
      },
      removeItemFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
      updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      },
    },
  });
  
  export const { addItemToCart, removeItemFromCart, updateQuantity } =
    cartSlice.actions;
  export default cartSlice.reducer;