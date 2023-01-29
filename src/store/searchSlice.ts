import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import searchQuery from "../lib/searchQuery";
import { SearchQuery } from "../types/api/SearchQuery";
import { SearchCategories } from "../types/Search";
import { RootState } from "./store";

interface SearchState {
  query: string;
  category?: SearchCategories;
  allCategories: boolean;
  isLoading: boolean;
  isEditing: boolean;
  error: boolean;
  hints?: string[];
  results?: SearchQuery;
}

const initialState: SearchState = {
  query: "",
  error: false,
  isLoading: false,
  isEditing: true,
  allCategories: true,
};

export const fetchResults = createAsyncThunk(
  "search/fetchResults",
  async (arg, { getState }) => {
    const { search } = getState() as RootState;
    const { query, category } = search;
    let params: { query: string; types?: string } = { query };

    if (category) params.types = category;

    try {
      const results = await searchQuery(params);
      return results;
    } catch {
      throw new Error();
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.isEditing = true;
    },
    updateHints(state, action: PayloadAction<string[]>) {
      state.hints = action.payload;
    },
    selectCategory(state, action: PayloadAction<SearchCategories>) {
      state.isEditing = true;
      state.category = action.payload;
      state.allCategories = false;
    },
    resestCategories(state) {
      state.isEditing = true;
      state.allCategories = true;
      state.category = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchResults.pending, (state) => {
      state.isLoading = true;
      state.isEditing = false;
    });
    builder.addCase(fetchResults.fulfilled, (state, { payload }) => {
      state.results = payload;
      state.isLoading = false;
      state.isEditing = false;
    });
    builder.addCase(fetchResults.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
      state.isEditing = false;
    });
  },
});

export const SearchActions = searchSlice.actions;

export default searchSlice.reducer;
