import { useEffect } from "react";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getPopularAlbums from "../../../lib/getPopularAlbums";
import getPopularPlaylists from "../../../lib/getPopularPlaylists";
import randomKey from "../../../utils/randomKey";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import PlaylistItem from "./PlaylistItem";

const PopularPlaylists = () => {
  const {
    data: playlistsInfo,
    error,
    isLoading,
    sendRequest,
  } = useAppleMusic(getPopularPlaylists, true);

  useEffect(() => {
    sendRequest();
  }, []);

  let content: JSX.Element | JSX.Element[] | undefined;

  if (!playlistsInfo && isLoading) {
    content = [...Array(8)].map(() => (
      <PlaylistItem type="notloaded" key={randomKey()} />
    ));
  }

  if (playlistsInfo && !error && !isLoading) {
    const albums = playlistsInfo.results.playlists[0].data;
    content = albums.map((playlist) => {
      return (
        <PlaylistItem
          type="loaded"
          attributes={playlist.attributes}
          id={playlist.id}
          key={playlist.id}
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

export default PopularPlaylists;
