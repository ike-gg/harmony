import { CSSProperties, FC } from "react";
import { PlaylistAttributes } from "../../../types/api/Playlist";
import parseArtwork from "../../../utils/parseArtwork";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: PlaylistAttributes;
  totalTracks: number;
}

const PlaylistDesc: FC<Props> = ({ attributes, totalTracks }) => {
  const { name, url, artwork, curatorName } = attributes;

  const desc = `${curatorName}, ${totalTracks} tracks`;

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
      <div className="mt-auto">
        <Hyperlink href={url} target={"_blank"} icon="external-link-alt">
          Check on Apple Music
        </Hyperlink>
      </div>
    </div>
  );
};

export default PlaylistDesc;
