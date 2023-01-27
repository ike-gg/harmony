import { SearchQuery } from "../types/api/SearchQuery";
import getURL from "../utils/getUrl";

const searchQuery = async (params?: Record<string, string>) => {
  const url = getURL(
    "https://harmony-backend.vercel.app/api/searchQuery",
    params
  );
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as SearchQuery;

  return data;
};

export default searchQuery;
