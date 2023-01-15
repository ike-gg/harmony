import { useEffect } from "react";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getPopularAlbums from "../../../lib/getPopularAlbums";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../HorizontalWrapper";
import AlbumItem from "./AlbumItem";

interface Props {}

const PopularAlbums = () => {
  const {
    data: AlbumsInfo,
    error,
    isLoading,
    sendRequest,
  } = useAppleMusic(getPopularAlbums, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <section className="flex flex-col gap-4">
      <SubHeading>Popular Albums</SubHeading>
      <HorizontalWrapper>
        {AlbumsInfo &&
          AlbumsInfo?.results.albums[0].data.map((album) => {
            const { artwork, name, artistName } = album.attributes;
            const { url } = artwork;
            const redirectTo = `${album.type}/${album.id}`;
            return (
              <AlbumItem
                to={redirectTo}
                key={album.id}
                artwork={url}
                author={artistName}
                name={name}
              />
            );
          })}
      </HorizontalWrapper>
    </section>
  );
};

export default PopularAlbums;
