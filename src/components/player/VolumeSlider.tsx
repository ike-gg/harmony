import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PlayerActions } from "../../store/playerSlice";
import { RootState, useAppDispatch } from "../../store/store";
import Icon from "../UI/Icon";

interface Props {
  track?: string;
  range?: string;
}

type VolumeLevels =
  | "volume"
  | "volume-down"
  | "volume-up"
  | "volume-off"
  | "volume-mute";

const VolumeSlider: FC<Props> = ({ range, track }) => {
  const player = useSelector((state: RootState) => state.player);
  const dispatch = useAppDispatch();

  const { isMuted, volume } = player;

  let icon: VolumeLevels = "volume";

  if (isMuted) icon = "volume-mute";
  else if (volume > 0.66) icon = "volume-up";
  else if (volume > 0.33) icon = "volume";
  else if (volume > 0) icon = "volume-down";
  else icon = "volume-off";

  const handleVolumeChange = (value: number[]) => {
    const [newVolume] = value;
    dispatch(PlayerActions.setVolume(newVolume));
  };

  const toggleMuteHandle = () => {
    dispatch(PlayerActions.toggleMute());
  };

  return (
    <div className="hidden md:flex flex-row gap-4 w-36 pr-2 items-center">
      <Icon iconName={icon} onClick={toggleMuteHandle} className="text-2xl" />
      <Root
        defaultValue={[volume]}
        max={1}
        min={0}
        step={0.01}
        value={[isMuted ? 0 : volume]}
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
