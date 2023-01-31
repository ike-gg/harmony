import { FC } from "react";
import { LibraryItem as LibraryItemType } from "../../types/api/Common";
import Empty from "../UI/Empty";
import LibraryItem from "./LibraryItem";
import LibraryWrapper from "./LibraryWrapper";

interface Props {
  libraryItems: LibraryItemType[];
}

const LibraryItems: FC<Props> = ({ libraryItems }) => {
  const albums: JSX.Element[] = [];
  const artists: JSX.Element[] = [];
  const songs: JSX.Element[] = [];
  const playlists: JSX.Element[] = [];

  libraryItems.forEach((item) => {
    if (item.type === "albums") {
      const { attributes, id } = item;
      const { artwork, artistName, name } = attributes;
      const link = `/album/${id}`;
      albums.push(
        <LibraryItem
          key={id}
          artworkUrl={artwork.url}
          detailsPage={link}
          title={name}
          name={artistName}
        />
      );
    }
    if (item.type === "artists") {
      const { attributes, id } = item;
      const { artwork, name, genreNames } = attributes;
      if (!artwork) return null;
      const link = `/artist/${id}`;
      artists.push(
        <LibraryItem
          key={id}
          artworkUrl={artwork.url}
          detailsPage={link}
          title={name}
          name={genreNames.join(", ")}
          roundedFull
        />
      );
    }
    if (item.type === "playlists") {
      const { attributes, id } = item;
      const { artwork, curatorName, name } = attributes;
      const link = `/playlist/${id}`;
      playlists.push(
        <LibraryItem
          key={id}
          artworkUrl={artwork.url}
          detailsPage={link}
          title={name}
          name={curatorName}
        />
      );
    }
    if (item.type === "songs") {
      const { attributes, id } = item;
      const { artwork, artistName, name } = attributes;
      const link = `/song/${id}`;
      songs.push(
        <LibraryItem
          key={id}
          artworkUrl={artwork.url}
          detailsPage={link}
          title={name}
          name={artistName}
        />
      );
    }
  });

  return (
    <>
      {libraryItems.length === 0 && <Empty />}
      {albums.length > 0 && (
        <LibraryWrapper title="Albums">{albums}</LibraryWrapper>
      )}
      {songs.length > 0 && (
        <LibraryWrapper title="Songs" cols={7}>
          {songs}
        </LibraryWrapper>
      )}
      {artists.length > 0 && (
        <LibraryWrapper title="Artists">{artists}</LibraryWrapper>
      )}
      {playlists.length > 0 && (
        <LibraryWrapper title="Playlists">{playlists}</LibraryWrapper>
      )}
    </>
  );
};

export default LibraryItems;
