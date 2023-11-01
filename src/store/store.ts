import { configureStore } from "@reduxjs/toolkit";
//== Reducers
import userSliceReducer from './slices/user';

export const store = configureStore({
  reducer: {
    user: userSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;