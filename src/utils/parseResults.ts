import { SearchQuery, SearchResults } from "../types/api/SearchQuery";

const parseResults = (resultsRaw: SearchQuery) => {
  let results = resultsRaw.results;

  const featuredIndex = 2;

  const featuredContent: SearchResults[] = [];
  const restContent: SearchResults[] = [];

  if (results.albums) {
    featuredContent.push(...results.albums.data.slice(0, featuredIndex));
    restContent.push(...results.albums.data.slice(featuredIndex));
  }
  if (results.songs) {
    featuredContent.push(...results.songs.data.slice(0, featuredIndex));
    restContent.push(...results.songs.data.slice(featuredIndex));
  }
  if (results.artists) {
    featuredContent.push(...results.artists.data.slice(0, featuredIndex));
    restContent.push(...results.artists.data.slice(featuredIndex));
  }

  if (results["music-videos"]) {
    restContent.push(...results["music-videos"].data.slice(featuredIndex));
  }

  restContent.sort((a, b) => 0.5 - Math.random());

  return [...featuredContent, ...restContent];
};

export default parseResults;
