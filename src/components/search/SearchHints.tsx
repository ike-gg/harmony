import { useDispatch, useSelector } from "react-redux";
import { SearchActions } from "../../store/searchSlice";
import { RootState } from "../../store/store";
import Icon from "../UI/Icon";

const SearchHints = () => {
  const dispatch = useDispatch();
  const hints = useSelector((state: RootState) => state.search.hints);

  if (!hints || hints.length === 0) return null;

  const hintsElements = hints.map((hint) => {
    const searchUsingHint = () => {
      dispatch(SearchActions.updateQuery(hint));
      dispatch(SearchActions.updateHints([]));
    };

    return (
      <div
        key={hint}
        className="w-full p-3 px-4 text-neutral-600 rounded-md border border-neutral-200 bg-white/50 hover:cursor-pointer hover:border-neutral-400"
        onClick={searchUsingHint}
      >
        <Icon iconName={"search"} /> {hint}
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{hintsElements}</div>;
};

export default SearchHints;
