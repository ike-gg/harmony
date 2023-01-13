import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarSubTitle from "./SidebarSubTitle";

const Sidebar = () => {
  const staticContent = ["Artists", "Albums", "Songs", "Playlists"];
  const staticElement = staticContent.map((item) => {
    return <SidebarItem name={item} key={item}></SidebarItem>;
  });

  return (
    <aside className="h-full w-max p-6 bg-neutral-300">
      <SidebarSubTitle>Global content</SidebarSubTitle>
      <ul>{staticElement}</ul>
      <SidebarSubTitle>User content</SidebarSubTitle>
    </aside>
  );
};

export default Sidebar;
