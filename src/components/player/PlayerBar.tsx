import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Artwork from "../music/Artwork";
import VolumeSlider from "./VolumeSlider";
import { isIOS } from "react-device-detect";
import Controls from "./Controls";
import Icon from "../UI/Icon";

const PlayerBar = () => {
  const audioSource = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const player = useSelector((state: RootState) => state.player);
  const [time, setTime] = useState(0);

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

  return (
    <div
      style={{
        backgroundColor: `#${backgroundColor}DD`,
        color: `#${textColor}`,
        border: `2px solid #${backgroundColor}DD`,
        borderBottom: "none",
        boxShadow: `0 0 15px #${backgroundColor}BB`,
      }}
      className={`sticky bottom-0 gap-3 flex items-center p-4 md:p-3 md:pr-8  backdrop-blur-md rounded-t-lg overflow-x-auto z-50`}
    >
      <audio
        ref={audioSource}
        onTimeUpdate={timeUpdateHandle}
        src={player.song.previews[0].url}
        autoPlay
      />
      <Artwork artworkUrl={player.song.artwork.url} size="icon" />
      <div>
        <h2 className="text-base font-semibold">{player.song.name}</h2>
        <p className="text-xs opacity-60">{player.song.artistName}</p>
      </div>
      <button
        onClick={() => {
          if (audioSource.current?.paused) {
            audioSource.current.play();
          } else {
            audioSource.current?.pause();
          }
        }}
      >
        <Icon className="text-3xl" iconName={"play"} />
      </button>
      <Controls currentTime={time} duration={audioSource.current?.duration} />
      {!isIOS && <VolumeSlider handleVolume={changeVolumeHandle} />}
    </div>
  );
};

export default PlayerBar;
