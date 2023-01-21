import { FC } from "react";
import { AlbumType } from "../../../types/api/Album";
import getReleaseDate from "../../../utils/getReleaseDate";
import Artwork from "../Artwork";
import AlbumTracks from "./AlbumTracks";

interface Props {
  albumData: AlbumType;
}

const Album: FC<Props> = ({ albumData }) => {
  const albumId = albumData.data[0].id;
  const album = albumData.data[0].attributes;
  const tracks = albumData.data[0].relationships.tracks;
  const artists = albumData.data[0].relationships.artists;

  const { artwork, name, artistName, genreNames, releaseDate } = album;
  const release = getReleaseDate(releaseDate);
  const basicInfo = [...genreNames, release?.year].join(" • ");

  return (
    <article className="flex flex-col">
      <div className="flex flex-col gap-3 items-center md:flex-row md:items-start md:gap-6">
        <div className="w-3/5 md:w-1/5">
          <Artwork artworkUrl={artwork.url} size="large" blurredShadow />
        </div>
        <div className="text-center md:text-left md:pt-10">
          <h1 className="text-2xl font-semibold mb-1">{name}</h1>
          <h2 className="text-base text-neutral-500">{artistName}</h2>
          <h3 className="text-sm text-neutral-400">{basicInfo}</h3>
        </div>
      </div>
      <AlbumTracks tracks={tracks} />
    </article>
  );
};

export default Album;
