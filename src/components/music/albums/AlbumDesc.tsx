import { FC } from "react";
import { AlbumAttributes } from "../../../types/api/Album";
import getReleaseDate from "../../../utils/getReleaseDate";
import Hyperlink from "../../UI/Hyperlink";

interface Props {
  attributes: AlbumAttributes;
}

const AlbumDesc: FC<Props> = ({ attributes }) => {
  const { name, artistName, url, genreNames, releaseDate } = attributes;

  const release = getReleaseDate(releaseDate);
  const basicInfo = [...genreNames, release?.year].join(" • ");

  return (
    <div className="flex flex-col gap-4 text-center md:text-left md:pt-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1 line-clamp-1">{name}</h1>
        <h2 className="text-base text-neutral-500">{artistName}</h2>
        <h3 className="text-sm text-neutral-400">{basicInfo}</h3>
      </div>
      <div className="mt-auto">
        <Hyperlink href={url} target={"_blank"} icon="external-link-alt">
          Listen on Apple Music
        </Hyperlink>
      </div>
    </div>
  );
};

export default AlbumDesc;
