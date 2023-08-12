// store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './uiSlice';
 const store = configureStore({
  reducer: {
    ui: uiReducer
  }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
