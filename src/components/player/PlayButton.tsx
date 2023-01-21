import { FC, useEffect, useState } from "react";
import Icon from "../UI/Icon";

interface Props {
  audio: HTMLAudioElement | null;
}

const PlayButton: FC<Props> = ({ audio }) => {
  const [icon, setIcon] = useState<"play" | "pause">("pause");

  useEffect(() => {
    if (!audio) return;
    audio.paused ? setIcon("play") : setIcon("pause");
  }, [audio?.paused]);

  const toggleSwitch = () => {
    if (!audio) return;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <button onClick={toggleSwitch}>
      <Icon className="text-2xl" iconName={icon} />
    </button>
  );
};

export default PlayButton;
