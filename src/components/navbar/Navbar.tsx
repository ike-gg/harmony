import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="sticky top-4 gap-2 flex border border-neutral-200/75 shadow-personal shadow-shadow p-2 md:p-3 bg-white/75 backdrop-blur-lg rounded-lg overflow-x-auto z-50">
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
