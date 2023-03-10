import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Artist from "../components/music/artists/Artist";
import Playlist from "../components/music/playlists/Playlist";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getPlaylist from "../lib/getPlaylist";
import { motion } from "framer-motion";
import { animationProps } from "./RootLayout";

const PlaylistView = () => {
  const params = useParams();
  const { id: playlistIdFull } = params;
  const {
    data: playlistInfo,
    error,
    sendRequest,
  } = useAppleMusic(getPlaylist, true);

  if (!playlistIdFull) return null;

  const playlistId = playlistIdFull.replace("dot", ".");

  useEffect(() => {
    sendRequest({ id: playlistId });
  }, []);

  if (error) return <Error />;
  if (!playlistInfo) return <Loading />;
  return (
    <motion.div {...animationProps}>
      <Playlist playlistData={playlistInfo} />
    </motion.div>
  );
};

export default PlaylistView;
