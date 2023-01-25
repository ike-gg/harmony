import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PlayerBar from "../components/player/PlayerBar";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen pb-0 lg:max-w-screen-lg lg:m-auto p-4">
      <Navbar />
      <main className="pt-10 pb-28 flex flex-col gap-8 min-h-screen">
        <Outlet />
      </main>
      <PlayerBar />
    </div>
  );
};

export default RootLayout;
