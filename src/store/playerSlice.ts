import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongAttributes } from "../types/api/Song";

interface PlayerState {
  song?: SongAttributes;
  id?: string;
  isPlaying: boolean;
  isLoading: boolean;
  timestamp: number;
}

const initialState: PlayerState = {
  isPlaying: false,
  isLoading: false,
  timestamp: 0,
};

interface SongAttributesID extends SongAttributes {
  id: string;
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeSong(state, action: PayloadAction<SongAttributesID>) {
      state.isLoading = false;
      state.song = action.payload;
      state.id = action.payload.id;
      state.isPlaying = true;
    },
    loadingSong(state, action: PayloadAction<string>) {
      state.id = action.payload;
      state.isLoading = true;
      state.isPlaying = false;
    },
    removeSong(state) {
      state.song = undefined;
    },
  },
});

export const PlayerActions = playerSlice.actions;

export default playerSlice.reducer;
