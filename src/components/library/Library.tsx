import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LibraryItems from "./LibraryItems";

const Library = () => {
  const library = useSelector((state: RootState) => state.library);

  return (
    <main className="flex flex-col gap-6 mt-8">
      <LibraryItems libraryItems={library.items} />
    </main>
  );
};

export default Library;
