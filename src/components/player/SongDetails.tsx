import { FC } from "react";
import Marquee from "react-fast-marquee";
import { SongAttributes } from "../../types/api/Song";
import Artwork from "../music/Artwork";

interface Props {
  song: SongAttributes;
}

const SongDetails: FC<Props> = ({ song }) => {
  const { artwork, name, artistName } = song;
  const { url } = artwork;

  return (
    <div className="flex flex-row items-center gap-2 w-40">
      <Artwork artworkUrl={url} size="icon" />
      <Marquee gradient={false} speed={30}>
        <div>
          <h2 className="text-base font-semibold pr-4">{name}</h2>
          <p className="text-xs opacity-60 pr-4">{artistName}</p>
        </div>
      </Marquee>
    </div>
  );
};

export default SongDetails;
