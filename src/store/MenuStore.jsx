import { configureStore } from '@reduxjs/toolkit';

import thaliapp from "../slices/productslice";

export const store = configureStore({
  reducer: {
    thaliapp
  },
})