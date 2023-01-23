import { FC } from "react";
import { AlbumRelationshipArtists } from "../../../types/api/Album";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";

interface Props {
  artists?: AlbumRelationshipArtists;
}

const AlbumArtists: FC<Props> = ({ artists }) => {
  if (!artists) return null;

  const { data: artistsData } = artists;

  console.log(artists);

  const content = artistsData.map((track) => {
    const {} = track;
    return <h1>{track.id}</h1>;
  });

  return <HorizontalWrapper rows={1}>{content}</HorizontalWrapper>;
};

export default AlbumArtists;
