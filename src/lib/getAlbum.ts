import { AlbumType } from "../types/api/Album";
import getURL from "../utils/getUrl";

const getAlbum = async (params?: Record<string, string>) => {
  const url = getURL("https://harmony-backend.vercel.app/api/getAlbum", params);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as AlbumType;

  return data;
};

export default getAlbum;
