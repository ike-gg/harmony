import { FC } from "react";
import {
  ArtistsRelationship,
  SongsRelationship,
} from "../../../types/api/Common";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import SongItem from "./SongItem";

interface Props {
  songs?: SongsRelationship;
}

const RelatedSongs: FC<Props> = ({ songs }) => {
  if (!songs) return null;

  const { data: songData } = songs;

  const content = songData.map((song) => {
    const { attributes, id } = song;
    return <SongItem attributes={attributes} id={id} key={id} type="loaded" />;
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Related Songs</SubHeading>
      <HorizontalWrapper rows={1}>{content}</HorizontalWrapper>
    </article>
  );
};

export default RelatedSongs;
