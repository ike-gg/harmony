import { CSSProperties, FC } from "react";
import { SongAttributes } from "../../../types/api/Song";
import parseArtwork from "../../../utils/parseArtwork";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: SongAttributes;
}

const SongDesc: FC<Props> = ({ attributes }) => {
  const { name, url, artwork, albumName, artistName } = attributes;

  const itemTheme = parseArtwork(artwork);
  const styles: CSSProperties = { color: itemTheme.primaryColor };

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
      <div className="mt-auto">
        <Hyperlink href={url} target={"_blank"} icon="external-link-alt">
          Check on Apple Music
        </Hyperlink>
      </div>
    </div>
  );
};

export default SongDesc;
