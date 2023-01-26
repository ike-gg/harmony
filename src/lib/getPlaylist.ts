import { PlaylistType } from "../types/api/Playlist";
import getURL from "../utils/getUrl";

const getPlaylist = async (params?: Record<string, string>) => {
  const url = getURL(
    "https://harmony-backend.vercel.app/api/getPlaylist",
    params
  );
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as PlaylistType;

  return data;
};

export default getPlaylist;
