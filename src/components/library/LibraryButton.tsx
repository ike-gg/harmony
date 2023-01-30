import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { LibraryActions } from "../../store/librarySlice";
import { RootState, useAppDispatch } from "../../store/store";
import { LibraryItem } from "../../types/api/Common";
import Button from "../UI/Button";

interface Props {
  item: LibraryItem;
}

const LibraryButton: FC<Props> = ({ item }) => {
  const library = useSelector((state: RootState) => state.library);
  const dispatch = useAppDispatch();
  const { id } = item;

  const [isAdded, setIsAdded] = useState(
    library.items.some((item) => item.id === id)
  );

  const handleLibrary = () => {
    if (!isAdded) {
      dispatch(LibraryActions.addItem(item));
      setIsAdded(true);
    }
    if (isAdded) {
      dispatch(LibraryActions.removeItem(id));
      setIsAdded(false);
    }
  };

  return (
    <Button
      onClick={handleLibrary}
      theme="white"
      icon={isAdded ? "trash" : "plus"}
    >
      {isAdded ? "Remove from library" : "Add to library"}
    </Button>
  );
};

export default LibraryButton;
