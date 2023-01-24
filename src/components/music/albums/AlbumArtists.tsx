import { FC } from "react";
import { AlbumRelationshipArtists } from "../../../types/api/Album";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import ArtistItem from "../artists/ArtistItem";

interface Props {
  artists?: AlbumRelationshipArtists;
}

const AlbumArtists: FC<Props> = ({ artists }) => {
  if (!artists) return null;

  const { data: artistsData } = artists;

  const content = artistsData.map((artist) => {
    return (
      <ArtistItem
        attributes={artist.attributes}
        id={artist.id}
        key={artist.id}
      />
    );
  });

  return (
    <article className="flex flex-col gap-4">
      <SubHeading>Related artists</SubHeading>
      <HorizontalWrapper rows={1}>{content}</HorizontalWrapper>
    </article>
  );
};

export default AlbumArtists;
