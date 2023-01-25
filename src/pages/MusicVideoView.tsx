import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicVideo from "../components/music/musicvideo/MusicVideo";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getMusicVideo from "../lib/getMusicVideo";

const MusicVideoView = () => {
  const params = useParams();
  const { id: musicVideoId } = params;
  const {
    data: musicVideoInfo,
    error,
    sendRequest,
  } = useAppleMusic(getMusicVideo, true);

  if (!musicVideoId) return null;

  useEffect(() => {
    sendRequest({ id: musicVideoId });
  }, []);

  if (error) return <Error />;
  if (!musicVideoInfo) return <Loading />;
  return <MusicVideo musicVideoData={musicVideoInfo} />;
};

export default MusicVideoView;
