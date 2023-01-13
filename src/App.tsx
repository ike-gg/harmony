import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./components/Album";
import Sidebar from "./components/layout/Sidebar/Sidebar";

export interface AlbumAttributes {
  artistName: string;
  artwork: {
    width: number;
    height: number;
    url: string;
    bgColor: string;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
  };
  copyright: string;
  genreNames: string[];
  name: string;
  releaseDate: string;
  trackCount: string;
}

export interface AlbumData {
  id: string;
  type: "albums";
  attributes: AlbumAttributes;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Sidebar />
      </>
    ),
  },
]);

// const App = () => {
//   const [albums, setAlbums] = useState<AlbumData[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://harmony-backend.vercel.app/api/popularAlbums"
//       );
//       const data = await response.json();
//       const fetchedAlbums = data.results.albums[0].data;
//       console.log(fetchedAlbums);
//       setAlbums(fetchedAlbums);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <ul className="flex flex-col gap-4 w-2/4  m-auto">
//         {albums.length === 0 && <li>Loading...</li>}
//         {albums.map((album) => {
//           console.log(album);
//           return (
//             <li key={album.id}>
//               <Album {...album.attributes} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
