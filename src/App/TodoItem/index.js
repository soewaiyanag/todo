import StyledTodoItem from "./styled";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "shared/Checkbox";
import { toggleComplete } from "store/todoSlice";
import completeSoundURL from "assets/complete.mp3";

const TodoItem = ({ children, id, isCompleted }) => {
  const dispatch = useDispatch();

  const playSound = useCallback(() => {
    const completeSound = new Audio(completeSoundURL);
    if (!isCompleted) {
      completeSound.currentTime = 0; // to play sound continuously on click
      completeSound.play();
    }
  }, [isCompleted]);

  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <Checkbox
        // if checked={true}, e.target.checked return "false"
        // to fix this it need to add "!" in front of isCompleted
        checked={!isCompleted}
        isCompleted={isCompleted}
        onChange={() => {
          playSound();
          dispatch(toggleComplete({ id }));
        }}
      />
      {children}
    </StyledTodoItem>
  );
};

export default TodoItem;
