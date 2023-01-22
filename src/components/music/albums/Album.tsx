import { FC } from "react";
import { AlbumType } from "../../../types/api/Album";
import getReleaseDate from "../../../utils/getReleaseDate";
import Hyperlink from "../../UI/Hyperlink";
import Paragraph from "../../UI/Paragraph";
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

  console.log(tracks);

  const { artwork, name, artistName, genreNames, releaseDate } = album;
  const { copyright, recordLabel } = album;
  const { url, editorialNotes } = album;
  const release = getReleaseDate(releaseDate);
  const basicInfo = [...genreNames, release?.year].join(" • ");

  return (
    <article className="flex flex-col gap-6">
      <main className="flex flex-col gap-3 items-center md:items-start md:flex-row md:gap-6">
        <div className="w-3/5 md:w-3/12">
          <Artwork artworkUrl={artwork.url} size="large" blurredShadow />
        </div>
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
      </main>
      <AlbumTracks tracks={tracks} />
      <div>
        <p className="text-neutral-400">Release date: {releaseDate}</p>
        <p className="text-neutral-400">{copyright}</p>
        <p className="text-neutral-400">{recordLabel}</p>
      </div>
    </article>
  );
};

export default Album;
