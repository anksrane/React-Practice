import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/ui/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});