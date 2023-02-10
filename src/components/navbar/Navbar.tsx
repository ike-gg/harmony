import classNames from "classnames";
import { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [isNavTop, setIsNavTop] = useState(true);

  const scrollHandler = (event: Event) => {
    const window = event.currentTarget as Window;
    const { scrollY } = window;
    if (scrollY <= 0) {
      setIsNavTop(true);
    } else {
      setIsNavTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={classNames(
        "sticky top-4 gap-2 flex py-2 md:py-3 rounded-lg overflow-x-auto z-50 border border-transparent transition-all duration-200",
        {
          "border-neutral-200/75 shadow-personal border shadow-shadow bg-white/75 backdrop-blur-lg px-2 md:px-3":
            !isNavTop,
        }
      )}
    >
      <NavbarItem name="Home" to="/" iconName="estate" end />
      <NavbarItem
        name="Search"
        to="/search"
        iconName="search"
        className="ml-auto"
      />
      <NavbarItem name="Library" to="/library" iconName="bookmark" />
    </nav>
  );
};

export default Navbar;
