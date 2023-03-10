import { useEffect } from "react";
import useAppleMusic from "../../../hooks/useAppleMusic";
import randomKey from "../../../utils/randomKey";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import getPopularSongs from "../../../lib/getPopularSongs";
import SongItem from "./SongItem";

const PopularSongs = () => {
  const {
    data: songsInfo,
    error,
    isLoading,
    sendRequest,
  } = useAppleMusic(getPopularSongs, true);

  useEffect(() => {
    sendRequest();
  }, []);

  let content: JSX.Element | JSX.Element[] | undefined;

  if (!songsInfo && isLoading) {
    content = [...Array(8 * 2)].map(() => (
      <SongItem type="notloaded" key={randomKey()} />
    ));
  }

  if (songsInfo && !error && !isLoading) {
    const songs = songsInfo.results.songs[0].data;
    content = songs.map((song) => {
      const { attributes, id, type } = song;
      return (
        <SongItem type="loaded" attributes={attributes} id={id} key={id} />
      );
    });
  }

  return (
    <section className="flex flex-col gap-4">
      <SubHeading isLoading={isLoading}>
        {songsInfo?.results.songs[0].name}
      </SubHeading>
      <HorizontalWrapper rows={2}>{content}</HorizontalWrapper>
    </section>
  );
};

export default PopularSongs;
