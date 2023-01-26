import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AlbumView from "./pages/AlbumView";
import ArtistView from "./pages/ArtistView";
import MusicVideoView from "./pages/MusicVideoView";
import PlaylistView from "./pages/PlaylistView";
import SongView from "./pages/SongView";
import Error from "./components/UI/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
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
      {
        path: "song",
        children: [
          {
            path: ":id",
            element: <SongView />,
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
