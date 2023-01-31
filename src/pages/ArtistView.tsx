import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Artist from "../components/music/artists/Artist";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getArtist from "../lib/getArtist";
import { motion } from "framer-motion";
import { animationProps } from "./RootLayout";

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
    <motion.div {...animationProps}>
      <Artist artistData={artistInfo} />
    </motion.div>
  );
};

export default ArtistView;
