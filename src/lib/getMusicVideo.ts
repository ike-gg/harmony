import { MusicVideoType } from "../types/api/MusicVideo";
import getURL from "../utils/getUrl";

const getMusicVideo = async (params?: Record<string, string>) => {
  const url = getURL(
    "https://harmony-backend.vercel.app/api/getMusicVideo",
    params
  );
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as MusicVideoType;

  return data;
};

export default getMusicVideo;
