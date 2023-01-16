import { useEffect } from "react";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getPopularAlbums from "../../../lib/getPopularAlbums";
import randomKey from "../../../utils/randomKey";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../HorizontalWrapper";
import AlbumItem from "./AlbumItem";

const PopularAlbums = () => {
  const {
    data: albumsInfo,
    error,
    isLoading,
    sendRequest,
  } = useAppleMusic(getPopularAlbums, true);

  useEffect(() => {
    sendRequest();
  }, []);

  let content: JSX.Element | JSX.Element[] | undefined;

  if (!albumsInfo && isLoading) {
    content = [...Array(8)].map(() => (
      <AlbumItem type="notloaded" key={randomKey()} />
    ));
  }

  if (albumsInfo && !error && !isLoading) {
    const albums = albumsInfo.results.albums[0].data;
    content = albums.map((album) => {
      return (
        <AlbumItem
          type="loaded"
          attributes={album.attributes}
          id={album.id}
          key={album.id}
        />
      );
    });
  }

  return (
    <section className="flex flex-col gap-4">
      <SubHeading isLoading={isLoading}>Popular Albums</SubHeading>
      <HorizontalWrapper rows={1}>{content}</HorizontalWrapper>
    </section>
  );
};

export default PopularAlbums;
