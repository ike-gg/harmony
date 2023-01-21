import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "../components/music/albums/Album";
import Artwork from "../components/music/Artwork";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getAlbum from "../lib/getAlbum";

const AlbumView = () => {
  const params = useParams();
  const { id: albumId } = params;
  const {
    data: albumInfo,
    error,
    isLoading,
    sendRequest,
  } = useAppleMusic(getAlbum, true);

  if (!albumId) return null;

  useEffect(() => {
    sendRequest({ id: albumId });
  }, []);

  if (!albumInfo) return <Loading />;
  return <Album albumData={albumInfo} />;
};

export default AlbumView;
