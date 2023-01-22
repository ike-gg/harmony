import { SongType } from "../types/api/Song";
import getURL from "../utils/getUrl";

const getSong = async (params?: Record<string, string>) => {
  const url = getURL("https://harmony-backend.vercel.app/api/getSong", params);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as SongType;

  return data;
};

export default getSong;
