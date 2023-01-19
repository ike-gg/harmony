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
        backgroundColor: `#${backgroundColor}DF`,
        color: `#${textColor}`,
        border: `2px solid #${backgroundColor}50`,
        boxShadow: `0 0 30px #${backgroundColor}`,
      }}
      className={`sticky bottom-0 gap-3 flex shadow-personal shadow-shadow items-center p-4 md:p-3 md:pr-8  backdrop-blur-md rounded-t-lg overflow-x-auto z-50`}
    >
      <Artwork artworkUrl={player.song.artwork.url} size="icon" />
      <div>
        <h2 className="text-base font-semibold">{player.song.name}</h2>
        <p className="text-xs text-neutral-500">{player.song.artistName}</p>
      </div>
      <audio
        ref={audioSource}
        onTimeUpdate={timeUpdateHandle}
        src={player.song.previews[0].url}
        autoPlay
        onChange={(x) => console.log(x)}
      />
      <button
        onClick={() => {
          if (audioSource.current?.paused) {
            audioSource.current.play();
          } else {
            audioSource.current?.pause();
          }
        }}
      >
        <Icon iconName={"play"} />
      </button>
      <Controls currentTime={time} duration={audioSource.current?.duration} />
      {!isIOS && <VolumeSlider handleVolume={changeVolumeHandle} />}
    </div>
  );
};

export default PlayerBar;
