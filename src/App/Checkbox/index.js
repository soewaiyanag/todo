import StyledCheckbox from "./styled";
import { toggleComplete } from "store/todoSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import completeSoundURL from "assets/complete.mp3";

const Checkbox = ({ isCompleted, id }) => {
  const dispatch = useDispatch();

  const playSound = useCallback(() => {
    const completeSound = new Audio(completeSoundURL);
    if (!isCompleted) {
      completeSound.currentTime = 0; // to play sound continuously on click
      completeSound.play();
    }
  }, [isCompleted]);
  return (
    <StyledCheckbox
      // if checked={true}, e.target.checked return "false"
      // to fix this it need to add "!" in front of isCompleted
      checked={!isCompleted}
      isCompleted={isCompleted}
      onChange={() => {
        playSound();
        dispatch(toggleComplete({ id }));
      }}
    />
  );
};

export default Checkbox;
