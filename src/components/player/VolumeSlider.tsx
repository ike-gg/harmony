import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";
import { FC, useState } from "react";
import Icon from "../UI/Icon";

interface Props {
  handleVolume: (value: number) => void;
}

type VolumeLevels = "volume" | "volume-down" | "volume-up" | "volume-off";

const VolumeSlider: FC<Props> = ({ handleVolume }) => {
  const [volumeIcon, setVolumeIcon] = useState<VolumeLevels>("volume-up");

  const handleVolumeChange = (value: number[]) => {
    const [newVolume] = value;
    handleVolume(newVolume);

    if (newVolume > 0.66) setVolumeIcon("volume-up");
    else if (newVolume > 0.33) setVolumeIcon("volume");
    else if (newVolume > 0) setVolumeIcon("volume-down");
    else setVolumeIcon("volume-off");
  };

  return (
    <div className="flex flex-row gap-4 w-36 items-center">
      <Icon iconName={volumeIcon} className="text-xl text-black/25" />
      <Root
        defaultValue={[1]}
        max={1}
        min={0}
        step={0.01}
        className="relative flex h-5 w-full touch-none items-center"
        onValueChange={handleVolumeChange}
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
