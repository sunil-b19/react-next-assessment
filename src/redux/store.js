"use client"

import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import userReducer from './userSilce';
import { authApi } from "./userApi";




export const store = configureStore({
  reducer: {
    user: userReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      authApi.middleware
    ])

})

setupListeners(store.dispatch)