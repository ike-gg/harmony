import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCategories from "../components/search/SearchCategories";
import SearchHints from "../components/search/SearchHints";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import searchQuery from "../lib/searchQuery";
import { SearchActions } from "../store/searchSlice";
import { RootState } from "../store/store";

const SearchView = () => {
  const { sendRequest } = useAppleMusic(searchQuery);

  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const { shouldFetch, query, categories, hints, results } = search;

  useEffect(() => {
    const fetchResults = async () => {
      if (!shouldFetch) return;
      dispatch(SearchActions.updateSearchResults(undefined));

      const parameters: { query: string; types?: string } = {
        query,
      };

      if (categories.length === 1) {
        parameters.types = categories[0];
      }

      const results = await sendRequest(parameters);
      dispatch(SearchActions.updateSearchResults(results));
    };

    fetchResults();
  }, [shouldFetch]);

  return (
    <div className="flex flex-col gap-3">
      <SearchCategories />
      <SearchInput />
      {/* {!shouldFetch && <SearchHints />} */}
      {!results && <Loading />}
      <SearchResults />
    </div>
  );
};

export default SearchView;
