import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PlayerActions } from "../../store/playerSlice";
import { RootState, useAppDispatch } from "../../store/store";
import Icon from "../UI/Icon";

const PlayButton: FC = () => {
  const [icon, setIcon] = useState<"play" | "pause">("pause");
  const dispatch = useAppDispatch();
  const player = useSelector((state: RootState) => state.player);

  const { isPlaying } = player;

  useEffect(() => {
    isPlaying ? setIcon("pause") : setIcon("play");
  }, [isPlaying]);

  const toggleSwitch = () => {
    if (isPlaying) {
      dispatch(PlayerActions.pause());
    } else {
      dispatch(PlayerActions.resume());
    }
  };

  return (
    <button
      className="order-last md:order-none w-10 h-10 rounded-full"
      onClick={toggleSwitch}
    >
      <Icon className="text-2xl" iconName={icon} />
    </button>
  );
};

export default PlayButton;
