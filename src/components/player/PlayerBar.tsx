import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { isMobile } from "react-device-detect";
import VolumeSlider from "./VolumeSlider";
import ProgressBar from "./ProgressBar";
import PlayButton from "./PlayButton";
import SongDetails from "./SongDetails";
import parseArtwork from "../../utils/parseArtwork";
import { fetchCurrentSong, PlayerActions } from "../../store/playerSlice";

const PlayerBar = () => {
  const audioSource = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const player = useSelector((state: RootState) => state.player);
  const [time, setTime] = useState(0);

  const { isPlaying, isLoading, id, song, shouldFetch, isMuted, volume } =
    player;

  useEffect(() => {
    if (!audioSource.current) return;
    isPlaying && audioSource.current.play();
    !isPlaying && audioSource.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (id && shouldFetch) {
      dispatch(fetchCurrentSong(id));
    }
  }, [id, shouldFetch]);

  useEffect(() => {
    if (!audioSource.current) return;
    if (isMuted) audioSource.current.volume = 0;
    audioSource.current.volume = volume;
  }, [isMuted, volume]);

  if (!song) {
    return null;
  }

  const timeUpdateHandle = (event: SyntheticEvent<HTMLAudioElement>) => {
    const currentStamp = event.currentTarget.currentTime;
    setTime(currentStamp);
  };

  const { artwork } = song;

  const { addAlpha, bgColor, primaryColor } = parseArtwork(artwork);

  return (
    <div
      style={{
        transition: "0.4s",
        backgroundColor: addAlpha(bgColor, 0.95),
        color: primaryColor,
        opacity: isLoading ? "0.6" : "1",
        border: `2px solid ${addAlpha(bgColor, 0.5)}`,
        boxShadow: `0 0 15px ${addAlpha(bgColor, 0.7)}`,
      }}
      className={`fixed w-full p-4 pr-6 md:p-3 gap-4 lg:max-w-screen-lg lg:m-auto bottom-0 flex items-center backdrop-blur-md rounded-t-md overflow-x-auto z-50 -translate-x-4`}
    >
      <audio
        ref={audioSource}
        onTimeUpdate={timeUpdateHandle}
        onEnded={() => dispatch(PlayerActions.nextTrack())}
        src={song.previews[0].url}
        autoPlay
      />
      <SongDetails song={song} />
      <PlayButton />
      <ProgressBar
        track={addAlpha(primaryColor, 0.2)}
        range={primaryColor}
        currentTime={time}
        duration={audioSource.current?.duration}
      />
      {!isMobile && (
        <VolumeSlider
          track={addAlpha(primaryColor, 0.2)}
          range={primaryColor}
        />
      )}
    </div>
  );
};

export default PlayerBar;
