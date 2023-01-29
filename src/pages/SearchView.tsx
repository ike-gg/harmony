import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCategories from "../components/search/SearchCategories";
import SearchHints from "../components/search/SearchHints";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import { RootState } from "../store/store";

const SearchView = () => {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const { error, isLoading, hints, results, isEditing } = search;

  return (
    <div className="flex flex-col gap-4">
      <SearchCategories />
      <SearchInput />
      {!isLoading && isEditing && hints && <SearchHints />}
      {isLoading && <Loading />}
      {error && !isLoading && <Error />}
      {!error && !isLoading && !isEditing && results && <SearchResults />}
    </div>
  );
};

export default SearchView;
