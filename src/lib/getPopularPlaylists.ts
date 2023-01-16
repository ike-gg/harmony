import { PopularPlaylists } from "../types/api/PopularPlaylists";

const getPopularPlaylists = async () => {
  const response = await fetch(
    "https://harmony-backend.vercel.app/api/popularPlaylists"
  );

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as PopularPlaylists;

  return data;
};

export default getPopularPlaylists;
