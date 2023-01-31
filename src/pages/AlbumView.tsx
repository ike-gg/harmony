import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "../components/music/albums/Album";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getAlbum from "../lib/getAlbum";
import { AnimationProps, motion } from "framer-motion";
import { animationProps } from "./RootLayout";

const AlbumView = () => {
  const params = useParams();
  const { id: albumId } = params;
  const { data: albumInfo, error, sendRequest } = useAppleMusic(getAlbum, true);

  if (!albumId) return null;

  useEffect(() => {
    sendRequest({ id: albumId });
  }, []);

  if (error) return <Error />;
  if (!albumInfo) return <Loading />;
  return (
    <motion.div {...animationProps}>
      <Album albumData={albumInfo} />
    </motion.div>
  );
};

export default AlbumView;
