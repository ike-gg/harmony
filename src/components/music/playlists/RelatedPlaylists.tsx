import { FC } from "react";
import { PlaylistsRelationship } from "../../../types/api/Common";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import PlaylistItem from "./PlaylistItem";

interface Props {
  playlists?: PlaylistsRelationship;
}

const RelatedPlaylists: FC<Props> = ({ playlists }) => {
  if (!playlists || playlists.data.length === 0) return null;

  const playlistsData = playlists.data;

  const content = playlistsData.map((playlist) => {
    const { attributes, id } = playlist;
    return (
      <PlaylistItem attributes={attributes} id={id} key={id} type="loaded" />
    );
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Related Playlists</SubHeading>
      <HorizontalWrapper>{content}</HorizontalWrapper>
    </article>
  );
};

export default RelatedPlaylists;
