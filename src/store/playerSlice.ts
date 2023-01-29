import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSong from "../lib/getSong";
import { SongAttributes } from "../types/api/Song";
import { RootState } from "./store";

interface PlayerState {
  song?: SongAttributes;
  id?: string;
  isPlaying: boolean;
  isLoading: boolean;
}

const initialState: PlayerState = {
  isPlaying: false,
  isLoading: false,
};

interface SongAttributesID extends SongAttributes {
  id: string;
}

export const fetchCurrentSong = createAsyncThunk(
  "play/changeSong",
  async (songId: string, { getState }) => {
    const state = getState() as RootState;
    console.log(state);
    // state.player.isPlaying = false;
    // state.player.isLoading = true;

    try {
      const song = await getSong({ id: songId });
      return song;
    } catch {
      throw new Error();
    }
  }
);

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
    resume(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentSong.pending, (state, action) => {
      console.log("pausing is loading true");
      state.id = action.meta.arg;
      state.isPlaying = false;
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentSong.fulfilled, (state, { payload }) => {
      state.song = payload.data[0].attributes;
      state.id = payload.data[0].id;
      state.isLoading = false;
      state.isPlaying = true;
    });
    builder.addCase(fetchCurrentSong.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const PlayerActions = playerSlice.actions;

export default playerSlice.reducer;
