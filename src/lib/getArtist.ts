import { ArtistType } from "../types/api/Artist";
import getURL from "../utils/getUrl";

const getArtist = async (params?: Record<string, string>) => {
  const url = getURL(
    "https://harmony-backend.vercel.app/api/getArtist",
    params
  );
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as ArtistType;

  return data;
};

export default getArtist;
