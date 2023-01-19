import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongAttributes } from "../types/api/Song";

interface PlayerState {
  song?: SongAttributes;
  id?: string;
  isPlaying: boolean;
  timestamp: number;
}

const initialState: PlayerState = {
  isPlaying: false,
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
      state.song = action.payload;
      state.id = action.payload.id;
      state.isPlaying = true;
    },
    removeSong(state) {
      state.song = undefined;
    },
  },
});

export const PlayerActions = playerSlice.actions;

export default playerSlice.reducer;
