import { CSSProperties, FC } from "react";
import { useSelector } from "react-redux";
import { LibraryActions } from "../../../store/librarySlice";
import { fetchCurrentSong } from "../../../store/playerSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { SongAttributes } from "../../../types/api/Song";
import parseArtwork from "../../../utils/parseArtwork";
import LibraryButton from "../../library/LibraryButton";
import SharedPlayButton from "../../player/SharedPlayButton";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: SongAttributes;
  id: string;
}

const SongDesc: FC<Props> = ({ attributes, id }) => {
  const dispatch = useAppDispatch();
  const library = useSelector((state: RootState) => state.library);

  const { name, url, artwork, albumName, artistName } = attributes;

  const itemTheme = parseArtwork(artwork);
  const styles: CSSProperties = { color: itemTheme.primaryColor };

  const playSong = () => {
    dispatch(fetchCurrentSong(id));
  };

  const addToLibrary = () => {
    const alredyInLibrary = library.items.some((item) => item.id.includes(id));
    if (alredyInLibrary) {
      dispatch(LibraryActions.removeItem(id));
    } else {
      dispatch(LibraryActions.addItem({ id, attributes, type: "songs" }));
    }
  };

  return (
    <div className="flex flex-col gap-4 text-center md:text-left md:pt-6">
      <div>
        <span
          style={styles}
          className="uppercase font-semibold tracking-wider opacity-60 text-xs md:text-sm text-neutral-400"
        >
          song
        </span>
        <h1
          style={styles}
          className="text-3xl md:text-5xl font-semibold pb-1 line-clamp-1"
        >
          {name}
        </h1>
        <h3 style={styles} className="font-normal pb-1 opacity-50 line-clamp-1">
          {`from ${albumName}, by ${artistName}`}
        </h3>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <div>
          <Hyperlink href={url} target={"_blank"} icon="external-link-alt">
            Listen on Apple Music
          </Hyperlink>
        </div>
        <div className="flex gap-2">
          <SharedPlayButton id={id} />
          <LibraryButton item={{ attributes, type: "songs", id }} />
        </div>
      </div>
    </div>
  );
};

export default SongDesc;
