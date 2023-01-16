import { PopularSongs } from "../types/api/PopularSongs";

const getPopularSongs = async () => {
  const response = await fetch(
    "https://harmony-backend.vercel.app/api/popularSongs"
  );

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as PopularSongs;

  return data;
};

export default getPopularSongs;
