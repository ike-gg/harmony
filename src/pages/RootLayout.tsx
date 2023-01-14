import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="w-full min-h-screen p-4 lg:max-w-screen-lg lg:m-auto">
      <Navbar />
      <main className="py-8 flex flex-col gap-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
