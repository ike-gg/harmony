import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";
import { FC, useState } from "react";
import Icon from "../UI/Icon";

interface Props {
  handleVolume: (value: number) => void;
}

type VolumeLevels =
  | "volume"
  | "volume-down"
  | "volume-up"
  | "volume-off"
  | "volume-mute";

const VolumeSlider: FC<Props> = ({ handleVolume }) => {
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(0);

  // const handleVolumeChange = (value: number[]) => {
  //   const [newVolume] = value;
  //   setVolume(newVolume);
  //   handleVolume(newVolume);
  // };
  const handleVolumeChange = (event: any) => {
    console.log(event);
    // const [newVolume] = value;
    // setVolume(newVolume);
    // handleVolume(newVolume);
  };

  let icon: VolumeLevels = "volume";

  if (isMuted) icon = "volume-mute";
  else if (volume > 0.66) icon = "volume-up";
  else if (volume > 0.33) icon = "volume";
  else if (volume > 0) icon = "volume-down";
  else icon = "volume-off";

  const toggleMuteHandle = () => {
    setIsMuted((prev) => !prev);
    setLastVolume(volume);
    setVolume(0);
  };

  return (
    <div className="flex flex-row gap-4 w-36 items-center">
      <Icon
        iconName={icon}
        onClick={toggleMuteHandle}
        className="text-xl text-black/50"
      />
      <Root
        defaultValue={[1]}
        max={1}
        min={0}
        step={0.01}
        onChange={handleVolumeChange}
        className="relative flex h-5 w-full touch-none items-center"
      >
        <Track className="relative h-1.5 w-full grow rounded-full bg-neutral-200/75">
          <Range className="absolute h-full rounded-full bg-black" />
        </Track>
        <Thumb className="block bg-transparent hover:bg-black h-4 w-4 rounded-full  cursor-grab active:cursor-grabbing" />
      </Root>
    </div>
  );
};

export default VolumeSlider;
