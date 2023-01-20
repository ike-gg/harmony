import { FC, useEffect, useState } from "react";
import Icon from "../UI/Icon";

interface Props {
  audio: HTMLAudioElement | null;
}

const PlayButton: FC<Props> = ({ audio }) => {
  const [icon, setIcon] = useState<"play" | "pause">("pause");

  useEffect(() => {
    if (audio?.paused) {
      setIcon("play");
    }
  }, [audio?.paused]);

  const toggleSwitch = () => {
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIcon("pause");
    } else {
      audio.pause();
      setIcon("play");
    }
  };

  return (
    <button onClick={toggleSwitch}>
      <Icon className="text-2xl" iconName={icon} />
    </button>
  );
};

export default PlayButton;
