import { useSelector } from "react-redux";
import { fetchResults, SearchActions } from "../../store/searchSlice";
import { RootState, useAppDispatch } from "../../store/store";
import Icon from "../UI/Icon";

const SearchHints = () => {
  const dispatch = useAppDispatch();
  const hints = useSelector((state: RootState) => state.search.hints);

  if (!hints || hints.length === 0) return null;

  const hintsElements = hints.map((hint) => {
    const searchUsingHint = () => {
      dispatch(SearchActions.updateQuery(hint));
      dispatch(SearchActions.updateHints([]));
      dispatch(fetchResults());
    };

    return (
      <div
        key={hint}
        className="flex w-full items-center gap-3 p-3 px-4 text-neutral-600 rounded-md border border-neutral-200 bg-white/50 hover:cursor-pointer hover:border-neutral-400"
        onClick={searchUsingHint}
      >
        <Icon iconName={"search"} /> {hint}
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{hintsElements}</div>;
};

export default SearchHints;
