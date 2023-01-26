import { FC } from "react";
import {
  ArtistsRelationship,
  MusicVideosRelationship,
} from "../../../types/api/Common";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import MusicVideoItem from "./MusicVideoItem";

interface Props {
  musicVideos?: MusicVideosRelationship;
}

const RelatedMusicVideos: FC<Props> = ({ musicVideos }) => {
  if (!musicVideos || musicVideos.data.length === 0) return null;

  const { data: musicVideosData } = musicVideos;

  const content = musicVideosData.map((musicVideo) => {
    const { attributes, id } = musicVideo;
    return (
      <MusicVideoItem attributes={attributes} id={id} key={id} type="loaded" />
    );
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Related Music Videos</SubHeading>
      <HorizontalWrapper rows={1}>{content}</HorizontalWrapper>
    </article>
  );
};

export default RelatedMusicVideos;
