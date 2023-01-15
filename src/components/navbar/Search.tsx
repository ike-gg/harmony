import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../UI/Icon";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    const isSearch = pathname.includes("search");
    setIsActive(isSearch);
  }, [pathname]);

  return (
    <NavbarItem name="Search" to="/search" iconName="search">
      {isActive && <SearchBar />}
    </NavbarItem>
  );
};

export default Search;
