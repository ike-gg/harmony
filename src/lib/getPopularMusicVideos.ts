import { PopularMusicVideos } from "../types/api/PopularMusicVideos";

const getPopularMusicVideos = async () => {
  const response = await fetch(
    "https://harmony-backend.vercel.app/api/popularMusicVideos"
  );

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as PopularMusicVideos;

  return data;
};

export default getPopularMusicVideos;
