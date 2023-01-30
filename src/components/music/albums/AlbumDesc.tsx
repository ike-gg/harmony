import { FC } from "react";
import { AlbumAttributes } from "../../../types/api/Album";
import getReleaseDate from "../../../utils/getReleaseDate";
import LibraryButton from "../../library/LibraryButton";
import SharedPlayButton from "../../player/SharedPlayButton";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: AlbumAttributes;
  tracksId?: string[];
  id: string;
}

const AlbumDesc: FC<Props> = ({ attributes, id, tracksId }) => {
  const { name, artistName, url, genreNames, releaseDate } = attributes;

  const release = getReleaseDate(releaseDate);
  const basicInfo = [...genreNames, release?.year].join(" • ");

  return (
    <div className="flex flex-col gap-4 text-center md:text-left md:pt-6">
      <div>
        <span className="uppercase font-semibold tracking-wider text-sm text-neutral-400">
          album
        </span>
        <h1 className="text-2xl font-semibold mb-1 line-clamp-1">{name}</h1>
        <h2 className="text-base text-neutral-500">{artistName}</h2>
        <h3 className="text-sm text-neutral-400">{basicInfo}</h3>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <div>
          <Hyperlink href={url} target={"_blank"} icon="external-link-alt">
            Listen on Apple Music
          </Hyperlink>
        </div>
        <div className="flex gap-2">
          {tracksId && <SharedPlayButton id={tracksId} />}
          <LibraryButton item={{ attributes, type: "albums", id }} />
        </div>
      </div>
    </div>
  );
};

export default AlbumDesc;
