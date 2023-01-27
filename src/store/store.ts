import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
