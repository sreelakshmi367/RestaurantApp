import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../types.ts";

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

const apiUrl = process.env.REACT_APP_RestaurantApp_Url;

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (categoryId: string) => {
    const response = await axios.get(`${apiUrl}/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/2da6c53a-522d-485d-b77c-2fafd601ff0c?cat=${categoryId}`);
    return response.data?.data?.items?.data;
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch items";
      });
  },
});

export default itemsSlice.reducer;
