import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../UI/Icon";
import SearchBar from "./SearchBar";

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    const isSearch = pathname.includes("search");
    setIsActive(isSearch);
  }, [pathname]);

  // const baseClasses =
  //   "bg-neutral-200/75 opacity-60 text-gray-500 hover:opacity-100 cursor-pointer rounded-xl";
  // const activeClasses =
  //   "bg-neutral-200/75 opacity-100 text-gray-500 border border-neutral-300 grow rounded-xl";

  const baseClasses =
    "bg-white/80 opacity-70 text-gray-400 border shadow-inner hover:opacity-100 cursor-pointer rounded-md";
  const activeClasses =
    "bg-white/25 opacity-100 text-gray-500 border border-black/20 shadow-inner hover:opacity-100 cursor-pointer rounded-md grow";

  return (
    <NavLink
      to="/search"
      className={({ isActive }) => {
        return isActive ? activeClasses : baseClasses;
      }}
    >
      <div
        className={`flex justify-center gap-3 px-3 items-center w-full h-full ${
          !isActive && "w-12 h-12"
        }`}
      >
        <Icon className="text-2xl" iconName="search" />
        {isActive && <SearchBar />}
      </div>
    </NavLink>
  );
};

export default Search;
