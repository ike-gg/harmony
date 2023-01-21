import { FC } from "react";
import { AlbumRelationshipTracks } from "../../../types/api/Album";
import SharedPlayButton from "../../player/SharedPlayButton";

interface Props {
  tracks?: AlbumRelationshipTracks;
}

const AlbumTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const { data: tracksData } = tracks;

  const content = tracksData.map((track) => {
    const { attributes, id } = track;
    const { name, trackNumber } = attributes;

    return (
      <li className="even:bg-neutral-100 rounded-md py-4 relative">
        <span className="inline-block w-10 text-center font-light text-neutral-400/80">
          {trackNumber}
        </span>
        <span className="text-neutral-700">{name}</span>
        <SharedPlayButton id={id} song={"a" as any} />
      </li>
    );
  });

  return <ul>{content}</ul>;
};

export default AlbumTracks;
