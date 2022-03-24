import StyledDeleteIcon from "./styled";
import { remove } from "store/todoSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import deleteSoundURL from "assets/click-sound.mp3";

const DeleteIcon = ({ id }) => {
  const dispatch = useDispatch();

  const playSound = useCallback(() => {
    const completeSound = new Audio(deleteSoundURL);
    completeSound.currentTime = 0; // to play sound continuously on click
    completeSound.play();
  }, []);

  const onClickHandler = () => {
    playSound();
    dispatch(remove({ id }));
  };

  return <StyledDeleteIcon onClick={onClickHandler} />;
};

export default DeleteIcon;
