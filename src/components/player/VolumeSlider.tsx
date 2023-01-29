import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";
import { FC, useState } from "react";
import Icon from "../UI/Icon";

interface Props {
  handleVolume: (value: number) => void;
  track?: string;
  range?: string;
}

type VolumeLevels =
  | "volume"
  | "volume-down"
  | "volume-up"
  | "volume-off"
  | "volume-mute";

const VolumeSlider: FC<Props> = ({ handleVolume, range, track }) => {
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(0);

  let icon: VolumeLevels = "volume";

  if (isMuted) icon = "volume-mute";
  else if (volume > 0.66) icon = "volume-up";
  else if (volume > 0.33) icon = "volume";
  else if (volume > 0) icon = "volume-down";
  else icon = "volume-off";

  const handleVolumeChange = (value: number[]) => {
    const [newVolume] = value;
    setVolume(newVolume);
    handleVolume(newVolume);
  };

  const toggleMuteHandle = () => {
    setIsMuted((prev) => !prev);
    if (isMuted) {
      handleVolumeChange([lastVolume]);
    } else {
      setLastVolume(volume);
      handleVolumeChange([0]);
    }
  };

  return (
    <div className="hidden md:flex flex-row gap-4 w-36 items-center">
      <Icon iconName={icon} onClick={toggleMuteHandle} className="text-2xl" />
      <Root
        defaultValue={[1]}
        max={1}
        min={0}
        step={0.01}
        value={[volume]}
        onValueChange={handleVolumeChange}
        className="relative flex h-5 w-full touch-none items-center"
      >
        <Track
          style={{ backgroundColor: track }}
          className="relative h-1.5 w-full grow rounded-full bg-neutral"
        >
          <Range
            style={{ backgroundColor: range }}
            className="absolute h-full rounded-full"
          />
        </Track>
        <Thumb
          style={{ backgroundColor: range }}
          className="block h-3 w-3 rounded-full cursor-grab active:cursor-grabbing"
        />
      </Root>
    </div>
  );
};

export default VolumeSlider;
