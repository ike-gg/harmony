import { useSelector } from "react-redux";
import { LibraryActions } from "../../store/librarySlice";
import { RootState, useAppDispatch } from "../../store/store";
import Button from "../UI/Button";
import LibraryItems from "./LibraryItems";

const Library = () => {
  const library = useSelector((state: RootState) => state.library);
  const dispatch = useAppDispatch();

  const removeItemsFromLibrary = () => {
    const decision = confirm("Are you sure you want to delete all items?");
    if (decision) {
      dispatch(LibraryActions.removeAllItems());
    }
  };

  return (
    <main className="flex flex-col gap-6 mt-8">
      <LibraryItems libraryItems={library.items} />
      {library.items.length > 0 && (
        <div className="flex justify-end">
          <Button theme="danger" icon="trash" onClick={removeItemsFromLibrary}>
            Remove all items from Library
          </Button>
        </div>
      )}
    </main>
  );
};

export default Library;
