import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongAttributes } from "../types/api/Song";

interface PlayerState {
  song?: SongAttributes;
  isPlaying: boolean;
  timestamp: number;
}

const initialState: PlayerState = {
  isPlaying: false,
  timestamp: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeSong(state, action: PayloadAction<SongAttributes>) {
      state.song = action.payload;
      state.isPlaying = true;
    },
    removeSong(state) {
      state.song = undefined;
    },
  },
});

export const PlayerActions = playerSlice.actions;

export default playerSlice.reducer;
