import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "../components/music/albums/Album";
import Song from "../components/music/songs/Song";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getSong from "../lib/getSong";
import { motion } from "framer-motion";
import { animationProps } from "./RootLayout";

const SongView = () => {
  const params = useParams();
  const { id: songId } = params;
  const { data: songInfo, error, sendRequest } = useAppleMusic(getSong, true);

  if (!songId) return null;

  useEffect(() => {
    sendRequest({ id: songId });
  }, []);

  if (error) return <Error />;
  if (!songInfo) return <Loading />;
  return (
    <motion.div {...animationProps}>
      <Song songData={songInfo} />
    </motion.div>
  );
};

export default SongView;
