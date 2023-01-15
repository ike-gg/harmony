import NavbarItem from "./NavbarItem";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="sticky top-4 flex gap-4 border border-neutral-200/75 shadow-personal shadow-shadow justify-between items-center p-3 bg-white/80 backdrop-blur-md rounded-lg">
      <span className="flex items-center gap-4">
        <NavbarItem name="Home" to="/" iconName="estate" end />
      </span>
      <span className="flex flex-grow justify-end gap-4">
        <Search />
        <NavbarItem name="Library" to="library" iconName="bookmark" />
      </span>
    </nav>
  );
};

export default Navbar;
