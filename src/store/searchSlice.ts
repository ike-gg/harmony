import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchQuery } from "../types/api/SearchQuery";
import { SearchCategories } from "../types/Search";

const defaultCategories: SearchCategories[] = [
  "albums",
  "artists",
  "music-videos",
  "songs",
];

interface SearchState {
  query: string;
  categories: SearchCategories[];
  defaultCategories: boolean;
  shouldFetch: boolean;
  hints?: string[];
  results?: SearchQuery;
}

const initialState: SearchState = {
  query: "",
  categories: defaultCategories,
  defaultCategories: true,
  shouldFetch: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    updateHints(state, action: PayloadAction<string[]>) {
      state.hints = action.payload;
    },
    updateSearchResults(state, action: PayloadAction<SearchQuery | undefined>) {
      if (!action.payload) state.results = undefined;
      state.results = action.payload;
    },
    selectCategory(state, action: PayloadAction<SearchCategories>) {
      state.categories = [action.payload];
      state.defaultCategories = false;
    },
    resestCategories(state) {
      state.categories = defaultCategories;
      state.defaultCategories = true;
    },
    shouldFetch(state, action: PayloadAction<boolean>) {
      state.shouldFetch = action.payload;
    },
  },
});

export const SearchActions = searchSlice.actions;

export default searchSlice.reducer;
