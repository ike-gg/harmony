import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import Artwork from "../music/Artwork";
import LibraryItems from "./LibraryItems";

const Library = () => {
  const library = useSelector((state: RootState) => state.library);

  const content = library.items.map((item) => {
    const { attributes, id, type } = item;
    if (!attributes.artwork) return null;
    let detailsPage: string = "";

    if (type === "albums") detailsPage = `/album/${id}`;
    if (type === "artists") detailsPage = `/artist/${id}`;
    if (type === "playlists") detailsPage = `/playlist/${id}`;
    if (type === "songs") detailsPage = `/song/${id}`;

    return (
      <Link to={detailsPage} className="p-4 bg-white">
        <Artwork artworkUrl={attributes.artwork.url} size="small" />
        <h1>{type}</h1>
        <h2>{attributes.name}</h2>
      </Link>
    );
  });

  return (
    <main className="flex flex-col gap-6 mt-8">
      <LibraryItems libraryItems={library.items} />
    </main>
  );
};

export default Library;
