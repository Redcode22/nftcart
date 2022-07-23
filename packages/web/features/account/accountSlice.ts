import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const accountSlice = createSlice({
  name: 'account',
  initialState: '',
  reducers: {
    addAccount: (state: string, action: PayloadAction<string>) => action.payload,
  }
})

export const { addAccount } = accountSlice.actions

export const selectAccount = (state: RootState) => state.account;

export default accountSlice.reducer