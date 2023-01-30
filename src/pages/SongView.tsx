import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "../components/music/albums/Album";
import Song from "../components/music/songs/Song";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getSong from "../lib/getSong";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Song songData={songInfo} />
    </motion.div>
  );
};

export default SongView;
