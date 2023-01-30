import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Artist from "../components/music/artists/Artist";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getArtist from "../lib/getArtist";
import { motion } from "framer-motion";

const ArtistView = () => {
  const params = useParams();
  const { id: artistId } = params;
  const {
    data: artistInfo,
    error,
    sendRequest,
  } = useAppleMusic(getArtist, true);

  if (!artistId) return null;

  useEffect(() => {
    sendRequest({ id: artistId });
  }, []);

  if (error) return <Error />;
  if (!artistInfo) return <Loading />;
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Artist artistData={artistInfo} />
    </motion.div>
  );
};

export default ArtistView;
