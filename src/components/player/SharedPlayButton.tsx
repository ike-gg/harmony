import { FC } from "react";
import { PlayerActions } from "../../store/playerSlice";
import { useAppDispatch } from "../../store/store";
import Button from "../UI/Button";

interface Props {
  id?: string | string[];
}

const SharedPlayButton: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  if (!id) return null;

  const onClick = () => {
    if (Array.isArray(id)) {
      dispatch(PlayerActions.setTracks(id));
      dispatch(PlayerActions.nextTrack());
      return;
    }
    dispatch(PlayerActions.setSong(id));
  };

  return (
    <Button onClick={onClick} theme="white" icon="play">
      Play
    </Button>
  );
};

export default SharedPlayButton;
