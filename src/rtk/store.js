import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./apiSlices/blogApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

export default store;

setupListeners(store.dispatch);
