import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSong from "../lib/getSong";
import { SongAttributes } from "../types/api/Song";
import { RootState } from "./store";

interface PlayerState {
  song?: SongAttributes;
  id?: string;
  nextTracks: string[];
  isPlaying: boolean;
  isLoading: boolean;
  shouldFetch: boolean;
}

const initialState: PlayerState = {
  nextTracks: [],
  isPlaying: false,
  isLoading: false,
  shouldFetch: false,
};

export const fetchCurrentSong = createAsyncThunk(
  "play/changeSong",
  async (songId: string, { getState, dispatch }) => {
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
    resume(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    setSong(state, action: PayloadAction<string>) {
      state.nextTracks = [];
      state.id = action.payload;
      state.shouldFetch = true;
    },
    setTracks(state, action: PayloadAction<string[]>) {
      state.nextTracks = action.payload;
    },
    nextTrack(state) {
      const nextTrackId = state.nextTracks.shift();
      if (nextTrackId) {
        state.id = nextTrackId;
        state.shouldFetch = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentSong.pending, (state, action) => {
      state.id = action.meta.arg;
      state.isPlaying = false;
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentSong.fulfilled, (state, { payload }) => {
      state.song = payload.data[0].attributes;
      state.id = payload.data[0].id;
      state.isLoading = false;
      state.isPlaying = true;
      state.shouldFetch = false;
    });
    builder.addCase(fetchCurrentSong.rejected, (state) => {
      state.isLoading = false;
      state.shouldFetch = false;
    });
  },
});

export const PlayerActions = playerSlice.actions;

export default playerSlice.reducer;
