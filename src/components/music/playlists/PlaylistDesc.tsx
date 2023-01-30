import { CSSProperties, FC } from "react";
import { PlaylistAttributes } from "../../../types/api/Playlist";
import parseArtwork from "../../../utils/parseArtwork";
import LibraryButton from "../../library/LibraryButton";
import SharedPlayButton from "../../player/SharedPlayButton";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: PlaylistAttributes;
  tracksId: string[];
  id: string;
}

const PlaylistDesc: FC<Props> = ({ attributes, id, tracksId }) => {
  const { name, url, artwork, curatorName } = attributes;

  const desc = `${curatorName}, ${tracksId.length} tracks`;

  const itemTheme = parseArtwork(artwork);
  const styles: CSSProperties = { color: itemTheme.primaryColor };

  return (
    <div className="flex flex-col gap-4 text-center md:text-left md:pt-6">
      <div>
        <span
          style={styles}
          className="uppercase font-semibold tracking-wider opacity-60 text-xs md:text-sm text-neutral-400"
        >
          playlist
        </span>
        <h1
          style={styles}
          className="text-3xl md:text-5xl font-semibold pb-1 line-clamp-1"
        >
          {name}
        </h1>
        <h3 style={styles} className="font-normal pb-1 opacity-50 line-clamp-1">
          {desc}
        </h3>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <div>
          <Hyperlink href={url} target={"_blank"} icon="external-link-alt">
            Check on Apple Music
          </Hyperlink>
        </div>
        <div className="flex gap-2 justify-center md:justify-start">
          {tracksId && <SharedPlayButton id={tracksId} />}
          <LibraryButton item={{ attributes, type: "playlists", id }} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistDesc;
