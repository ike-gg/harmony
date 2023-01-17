import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="sticky top-4 gap-4 flex border border-neutral-200/75 shadow-personal shadow-shadow justify-between items-center p-2 md:p-3 bg-white/75 backdrop-blur-md rounded-lg overflow-x-auto z-50">
      <NavbarItem name="Home" to="/" iconName="estate" end />
      <NavbarItem
        name="Search"
        to="search"
        iconName="search"
        className="md:ml-auto"
      />
      <NavbarItem name="Library" to="library" iconName="bookmark" />
    </nav>
  );
};

export default Navbar;
