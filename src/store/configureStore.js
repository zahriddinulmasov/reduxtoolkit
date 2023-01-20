import { configureStore } from "@reduxjs/toolkit";
import { headerTitleReducer } from "./commonTitle";

export const store = configureStore({
  reducer: {
    headerTitle: headerTitleReducer,
  },
});
