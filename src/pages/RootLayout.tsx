import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PlayerBar from "../components/player/PlayerBar";

const RootLayout = () => {
  return (
    <div className="w-full min-h-screen p-4 pb-0 lg:max-w-screen-lg lg:m-auto">
      <Navbar />
      <main className="py-8 flex flex-col gap-8 min-h-screen">
        <Outlet />
      </main>
      <PlayerBar />
    </div>
  );
};

export default RootLayout;
