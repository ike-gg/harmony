import { ChangeEvent, FC, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAppleMusic from "../../hooks/useAppleMusic";
import getSearchHint from "../../lib/getSearchHint";
import { fetchResults, SearchActions } from "../../store/searchSlice";
import { RootState, useAppDispatch } from "../../store/store";
import Icon from "../UI/Icon";

const SearchInput: FC = () => {
  const { sendRequest: getHints } = useAppleMusic(getSearchHint);

  const dispatch = useAppDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  const handleInputUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(SearchActions.updateQuery(event.target.value));
  };

  //debouncing
  useEffect(() => {
    if (query.length < 2) return;

    const deboucne = setTimeout(async () => {
      const hintsResponse = await getHints({ query });
      const { terms } = hintsResponse.results;
      dispatch(SearchActions.updateHints(terms));
    }, 200);

    return () => {
      clearTimeout(deboucne);
    };
  }, [query]);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.length === 0) return;
    dispatch(fetchResults());
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 relative">
      <input
        className=" w-full bg-white p-3 px-4 border border-neutral-200 rounded-md focus:outline-black"
        value={query}
        onChange={handleInputUpdate}
        placeholder="🔍 Search for content"
      />
      <button className="bg-black text-white px-4 rounded-md flex gap-2 items-center text-sm md:text-base">
        Search <Icon className="hidden md:block" iconName="search" />
      </button>
    </form>
  );
};

export default SearchInput;
