import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SearchResults = () => {
  const dispatch = useDispatch();
  const results = useSelector((state: RootState) => state.search.results);

  return <div>{JSON.stringify(results)}</div>;
};

export default SearchResults;
