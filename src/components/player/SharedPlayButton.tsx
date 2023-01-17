import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { PlayerActions } from "../../store/playerSlice";
import { SongAttributes } from "../../types/api/Song";
import Icon from "../UI/Icon";

interface Props {
  song: SongAttributes;
}

const SharedPlayButton: FC<Props> = ({ song }) => {
  const dispatch = useDispatch();
  const handlePlay = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(PlayerActions.changeSong(song));
  };

  return (
    <button
      onClick={handlePlay}
      className="absolute flex justify-center items-center right-1 bottom-1 w-6 h-6 rounded-full bg-neutral-100 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-600 z-40"
    >
      <Icon iconName="play" className="translate-x-[1px] translate-y-[0.2px]" />
    </button>
  );
};

export default SharedPlayButton;
