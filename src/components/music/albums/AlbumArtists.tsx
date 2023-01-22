import { FC } from "react";
import { AlbumRelationshipArtists } from "../../../types/api/Album";

interface Props {
  artists?: AlbumRelationshipArtists
}

const AlbumArtists: FC<Props> = ({ artists }) => {
  if (!artists) return null;

  // const { sendRequest } = useAppleMusic(getSong);

  const { data: artistsData } = artists;

  const content = artistsData.map((track) => {
    return (
      
    );
  });

  return <ul>{content}</ul>;
};

export default AlbumArtists;
