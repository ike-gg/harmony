import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PlayerBar from "../components/player/PlayerBar";
import Footer from "../components/UI/Footer";
import { motion } from "framer-motion";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen pb-0 lg:max-w-screen-lg lg:m-auto p-4">
      <Navbar />
      <AnimatePresence>
        <main className="py-4 flex flex-col gap-8 min-h-screen">
          <Outlet />
        </main>
        <Footer className="mb-20" />
        <PlayerBar />
      </AnimatePresence>
    </div>
  );
};

export default RootLayout;
