import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Artist from "../components/music/artists/Artist";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import useAppleMusic from "../hooks/useAppleMusic";
import getArtist from "../lib/getArtist";

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
  return <Artist artistData={artistInfo} />;
};

export default ArtistView;
