import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import searchQuery from "../lib/searchQuery";
import { SearchQuery } from "../types/api/SearchQuery";
import { SearchCategories } from "../types/Search";
import { AppThunk } from "./store";

interface SearchState {
  query: string;
  categories?: SearchCategories;
  allCategories: boolean;
  shouldFetch: boolean;
  hints?: string[];
  results?: SearchQuery;
}

const initialState: SearchState = {
  query: "",
  shouldFetch: false,
  allCategories: true,
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
      state.categories = action.payload;
      state.allCategories = false;
    },
    resestCategories(state) {
      state.allCategories = true;
      state.categories = undefined;
    },
    shouldFetch(state, action: PayloadAction<boolean>) {
      state.shouldFetch = action.payload;
    },
  },
});

export const fetchResults = (lol: string): AppThunk => {
  console.log("???");
  return async (dispatch) => {
    console.log("dispatching");
    try {
      await setTimeout(() => {
        dispatch(SearchActions.updateQuery(lol));
        console.log("lol??");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
};

export const SearchActions = searchSlice.actions;

export default searchSlice.reducer;
