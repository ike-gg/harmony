import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchActions } from "../../store/searchSlice";
import { RootState } from "../../store/store";
import Icon from "../UI/Icon";
import { categories } from "./Categories";

const SearchCategories = () => {
  const [showButtons, setShowButtons] = useState(false);

  const dispatch = useDispatch();
  const searchState = useSelector((state: RootState) => state.search);

  const { categories: activeCategory, allCategories } = searchState;

  let containResults: string = "";

  if (allCategories) {
    containResults = "albums, songs, artists, music videos";
  }

  const Categories = categories.map(({ name, key }) => {
    const isActive = activeCategory === key;

    const handleCategorySelect = () => {
      if (isActive) {
        dispatch(SearchActions.resestCategories());
      } else {
        dispatch(SearchActions.selectCategory(key));
      }
    };

    return (
      <button
        className={classNames(
          "w-full p-2 rounded-md border border-transparent text-sm md:text-base",
          {
            "bg-black text-white": isActive,
            "opacity-40 border-neutral-300/50": !isActive,
            "bg-black/70 text-white": allCategories,
          }
        )}
        key={key}
        onClick={handleCategorySelect}
      >
        {name}
      </button>
    );
  });

  const toggleShowButton = () => {
    setShowButtons((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-sm md:text-base">
        <p className="text-neutral-400">
          Search results will include:
          <span className="ml-1 text-neutral-800">{containResults}</span>
        </p>
        <button
          onClick={toggleShowButton}
          className="text-black whitespace-nowrap"
        >
          Edit <Icon iconName={"angle-right"} />
        </button>
      </div>
      {showButtons && (
        <div className="grid grid-cols-2 md:flex gap-2 md:gap-4">
          {Categories}
        </div>
      )}
    </div>
  );
};

export default SearchCategories;
