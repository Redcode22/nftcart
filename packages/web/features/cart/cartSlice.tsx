import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state: any, action: PayloadAction<any>) => action.payload
  }
})

export const { addToCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer