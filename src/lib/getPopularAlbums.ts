import { PopularAlbums } from "../types/api/PopularAlbums";

const getPopularAlbums = async () => {
  const response = await fetch(
    "https://harmony-backend.vercel.app/api/popularAlbums"
  );

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as PopularAlbums;

  return data;
};

export default getPopularAlbums;
