import { useEffect } from "react";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getPopularMusicVideos from "../../../lib/getPopularMusicVideos";
import randomKey from "../../../utils/randomKey";
import SubHeading from "../../UI/Headings/SubHeading";
import HorizontalWrapper from "../../UI/Wrappers/HorizontalWrapper";
import MusicVideoItem from "./MusicVideoItem";

const PopularMusicVideos = () => {
  const {
    data: musicVideosInfo,
    error,
    isLoading,
    sendRequest,
  } = useAppleMusic(getPopularMusicVideos, true);

  useEffect(() => {
    sendRequest();
  }, []);

  let content: JSX.Element | JSX.Element[] | undefined;

  if (!musicVideosInfo && isLoading) {
    content = [...Array(8)].map(() => (
      <MusicVideoItem type="notloaded" key={randomKey()} />
    ));
  }

  if (musicVideosInfo && !error && !isLoading) {
    const albums = musicVideosInfo.results["music-videos"][0].data;
    content = albums.map((musicVideo) => {
      return (
        <MusicVideoItem
          type="loaded"
          attributes={musicVideo.attributes}
          id={musicVideo.id}
          key={musicVideo.id}
        />
      );
    });
  }

  return (
    <section className="flex flex-col gap-4">
      <SubHeading isLoading={isLoading}>
        {musicVideosInfo?.results["music-videos"][0].name}
      </SubHeading>
      <HorizontalWrapper rows={1}>{content}</HorizontalWrapper>
    </section>
  );
};

export default PopularMusicVideos;
