import { FC } from "react";
import { AlbumsRelationship } from "../../../types/api/Common";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import AlbumItem from "./AlbumItem";

interface Props {
  albums?: AlbumsRelationship;
  rows?: number;
}

const RelatedAlbums: FC<Props> = ({ albums, rows = 1 }) => {
  if (!albums || albums.data.length === 0) return null;
  const albumsData = albums.data;

  let content = albumsData.map((album) => {
    const { attributes, id } = album;
    return <AlbumItem attributes={attributes} id={id} key={id} type="loaded" />;
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Related Albums</SubHeading>
      <HorizontalWrapper rows={rows}>{content}</HorizontalWrapper>
    </article>
  );
};

export default RelatedAlbums;
