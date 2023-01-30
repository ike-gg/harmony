import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LibraryItem } from "../types/api/Common";

const getLocalStorage = () => {
  const localData = localStorage.getItem("library");
  if (!localData) return [];
  return JSON.parse(localData);
};

interface LibraryState {
  items: LibraryItem[];
}

const initialState: LibraryState = {
  items: getLocalStorage(),
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<LibraryItem>) {
      state.items.push(action.payload);
      localStorage.setItem("library", JSON.stringify(state.items));
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("library", JSON.stringify(state.items));
    },
  },
});

export const LibraryActions = librarySlice.actions;

export default librarySlice.reducer;
