import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/ui/themeSlice";
import mobMenuReducer from "../features/ui/mobMenuSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    menuMobile: mobMenuReducer,
  },
});