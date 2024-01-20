"use client"

import { createSlice } from "@reduxjs/toolkit";
import { addUser, clearAll, getUser } from "./localStroage";

import { toast } from "react-toastify";



const initialState = {
  user: getUser()
};


export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      addUser(state.user);
    },

    clearData: (state, action) => {
      state.user = null;
      clearAll();
      toast.success("logout successful")
    }

  }
});
export const { clearData, setUser } = userSlice.actions;

export default userSlice.reducer;