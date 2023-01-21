import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Test from "./pages/Test";
import AlbumView from "./pages/AlbumView";
import Loading from "./components/UI/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "library",
        index: true,
        element: "library",
      },
      {
        path: "search",
        index: true,
        element: "Search",
      },
      {
        path: "album",
        children: [
          {
            path: ":id",
            element: <AlbumView />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
