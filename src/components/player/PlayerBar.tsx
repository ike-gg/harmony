import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Artwork from "../music/Artwork";
import VolumeSlider from "./VolumeSlider";
import { isIOS, isMobile } from "react-device-detect";
import ProgressBar from "./ProgressBar";
import PlayButton from "./PlayButton";
import SongDetails from "./SongDetails";

const PlayerBar = () => {
  const audioSource = useRef<HTMLAudioElement>(null);
  const player = useSelector((state: RootState) => state.player);
  const [time, setTime] = useState(0);

  const { isPlaying } = player;

  useEffect(() => {
    if (!audioSource.current) return;
    if (isPlaying) {
      audioSource.current.play();
    } else {
      audioSource.current.pause();
    }
  }, [isPlaying]);

  if (!player.song) {
    return null;
  }

  const changeVolumeHandle = (newVolume: number) => {
    if (!audioSource.current) return;
    audioSource.current.volume = newVolume;
  };

  const timeUpdateHandle = (event: SyntheticEvent<HTMLAudioElement>) => {
    const currentStamp = event.currentTarget.currentTime;
    setTime(currentStamp);
  };

  const { artwork } = player.song;

  const backgroundColor = artwork.bgColor;
  const textColor = artwork.textColor1;

  const opacity = isPlaying ? "1" : "0.6";

  return (
    <div
      style={{
        transition: "0.5s",
        backgroundColor: `#${backgroundColor}EE`,
        color: `#${textColor}`,
        opacity,
        border: `2px solid #${backgroundColor}DD`,
        boxShadow: `0 0 15px #${backgroundColor}BB`,
      }}
      className={`fixed w-full p-4 pr-6 md:p-3 gap-4 lg:max-w-screen-lg lg:m-auto bottom-0 flex items-center backdrop-blur-md rounded-t-md overflow-x-auto z-50 -translate-x-4`}
    >
      <audio
        ref={audioSource}
        onTimeUpdate={timeUpdateHandle}
        src={player.song.previews[0].url}
        autoPlay
      />
      <SongDetails song={player.song} />
      <PlayButton audio={audioSource.current} />
      <ProgressBar
        color={textColor}
        currentTime={time}
        duration={audioSource.current?.duration}
      />
      {!isMobile && (
        <VolumeSlider color={textColor} handleVolume={changeVolumeHandle} />
      )}
    </div>
  );
};

export default PlayerBar;
