import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Account from "../../types/account";


export const accountSlice = createSlice({
  name: 'favourites',
  initialState: '',
  reducers: {
    addAccount: (state: string, action: PayloadAction<string>) => action.payload,
  }
})

export const { addAccount } = accountSlice.actions

export const selectAccount = (state: RootState) => state.account;

export default accountSlice.reducer