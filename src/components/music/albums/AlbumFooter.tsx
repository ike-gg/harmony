import { FC } from "react";
import { AlbumAttributes } from "../../../types/api/Album";

interface Props {
  attributes: AlbumAttributes;
}

const AlbumFooter: FC<Props> = ({ attributes }) => {
  const { releaseDate, copyright, recordLabel } = attributes;

  return (
    <footer className="text-neutral-400 text-sm">
      <p>Release date: {releaseDate}</p>
      <p>{copyright}</p>
      <p>{recordLabel}</p>
    </footer>
  );
};

export default AlbumFooter;
