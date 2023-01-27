import { SearchHint } from "../types/api/SearchHint";
import getURL from "../utils/getUrl";

const getSearchHint = async (params?: Record<string, string>) => {
  const url = getURL(
    "https://harmony-backend.vercel.app/api/searchHints",
    params
  );
  const response = await fetch(url);

  if (!response.ok) {
    console.log(response);
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as SearchHint;

  return data;
};

export default getSearchHint;
