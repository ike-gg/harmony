import { FC, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { LibraryActions } from "../../../store/librarySlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { SongAttributes } from "../../../types/api/Song";
import Icon from "../../UI/Icon";

interface Props {
  id: string;
  attributes: SongAttributes;
}

const TrackLibrary: FC<Props> = ({ id, attributes }) => {
  const libraryItems = useSelector((state: RootState) => state.library.items);
  const dispatch = useAppDispatch();

  const currentlyAdded = libraryItems.some((item) => item.id === id);

  const handleLibrary = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentlyAdded) dispatch(LibraryActions.removeItem(id));
    else dispatch(LibraryActions.addItem({ attributes, id, type: "songs" }));
  };

  return (
    <button className="opacity-30 hover:opacity-100" onClick={handleLibrary}>
      <Icon
        iconName={currentlyAdded ? "heart" : "plus"}
        className={currentlyAdded ? "text-red-600" : ""}
      />
    </button>
  );
};

export default TrackLibrary;
