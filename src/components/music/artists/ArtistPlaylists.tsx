import { FC } from "react";
import { ArtistPlaylistsRelationship } from "../../../types/api/Artist";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import PlaylistItem from "../playlists/PlaylistItem";

interface Props {
  playlists?: ArtistPlaylistsRelationship;
}

const ArtistPlaylists: FC<Props> = ({ playlists }) => {
  if (!playlists) return null;

  const playlistsData = playlists.data;

  const content = playlistsData.map((playlist) => {
    const { attributes, id } = playlist;
    return <PlaylistItem attributes={attributes} id={id} type="loaded" />;
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Featured playlists</SubHeading>
      <HorizontalWrapper>{content}</HorizontalWrapper>
    </article>
  );
};

export default ArtistPlaylists;
