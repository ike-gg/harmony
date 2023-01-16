import { PopularAlbums } from "../types/api/PopularAlbums";

const getPopularAlbums = async () => {
  const response = await fetch(
    "https://harmony-backend.vercel.app/api/popularAlbums"
  );

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as PopularAlbums;

  // data.results.albums[0].data.splice(4);
  return data;
};

export default getPopularAlbums;
