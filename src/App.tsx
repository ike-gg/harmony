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
import ArtistView from "./pages/ArtistView";
import MusicVideoView from "./pages/MusicVideoView";
import PlaylistView from "./pages/PlaylistView";

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
      {
        path: "artist",
        children: [
          {
            path: ":id",
            element: <ArtistView />,
          },
        ],
      },
      {
        path: "musicvideo",
        children: [
          {
            path: ":id",
            element: <MusicVideoView />,
          },
        ],
      },
      {
        path: "playlist",
        children: [
          {
            path: ":id",
            element: <PlaylistView />,
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
