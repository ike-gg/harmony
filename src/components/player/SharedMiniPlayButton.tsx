import { FC, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { PlayerActions } from "../../store/playerSlice";
import { RootState, useAppDispatch } from "../../store/store";
import Icon from "../UI/Icon";

interface Props {
  id: string;
}

const SharedMiniPlayButton: FC<Props> = ({ id }) => {
  const player = useSelector((state: RootState) => state.player);
  const dispatch = useAppDispatch();

  const { id: currentId, isPlaying } = player;

  const handlePlay = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(PlayerActions.setSong(id));
  };

  return (
    <button
      onClick={handlePlay}
      className="absolute flex justify-center items-center right-1 bottom-1 w-6 h-6 rounded-full bg-neutral-100 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-600 z-20"
    >
      <Icon
        iconName={id === currentId && isPlaying ? "pause" : "play"}
        className="translate-x-[0.5px] translate-y-[0.2px]"
      />
    </button>
  );
};

export default SharedMiniPlayButton;
