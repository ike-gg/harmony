import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import playerReducer from "./playerSlice";
import searchReducer from "./searchSlice";
import libraryReducer from "./librarySlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    search: searchReducer,
    library: libraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
