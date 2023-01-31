import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicVideo from "../components/music/musicvideo/MusicVideo";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getMusicVideo from "../lib/getMusicVideo";
import { motion } from "framer-motion";

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
  return (
    <div>
      <MusicVideo musicVideoData={musicVideoInfo} />
    </div>
  );
};

export default MusicVideoView;
