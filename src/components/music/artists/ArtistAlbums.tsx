import { FC } from "react";
import { ArtistAlbumRelationship } from "../../../types/api/Artist";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import AlbumItem from "../albums/AlbumItem";

interface Props {
  albums?: ArtistAlbumRelationship;
}

const ArtistAlbums: FC<Props> = ({ albums }) => {
  if (!albums) return null;
  const albumsData = albums.data;

  let content = albumsData.map((album) => {
    return (
      <AlbumItem
        attributes={album.attributes}
        id={album.id}
        key={album.id}
        type="loaded"
      />
    );
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Albums</SubHeading>
      <HorizontalWrapper>{content}</HorizontalWrapper>
    </article>
  );
};

export default ArtistAlbums;
