import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCurrentSong, PlayerActions } from "../../store/playerSlice";
import { RootState, useAppDispatch } from "../../store/store";
import Button from "../UI/Button";

interface Props {
  id: string | string[];
}

const SharedPlayButton: FC<Props> = ({ id }) => {
  let player = useSelector((state: RootState) => state.player);
  const dispatch = useAppDispatch();

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
