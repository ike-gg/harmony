import {
  ChangeEvent,
  ReactEventHandler,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Artwork from "../music/Artwork";
import VolumeSlider from "./VolumeSlider";
import { isIOS } from "react-device-detect";
import Controls from "./Controls";
import { current } from "@reduxjs/toolkit";
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

  return (
    <div className="sticky bottom-0 gap-3 flex border border-neutral-200/75 shadow-personal shadow-shadow items-center p-4 md:p-3 md:pr-8 bg-white/90 backdrop-blur-md rounded-t-lg overflow-x-auto z-50">
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
