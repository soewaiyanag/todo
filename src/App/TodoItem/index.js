import StyledTodoItem from "./styled";
import Checkbox from "../../shared/Checkbox";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../../store/todoSlice";
import completeSoundURL from "../../assets/complete.mp3";
import { useCallback } from "react";

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
          playSound(!isCompleted);
          dispatch(toggleComplete({ id }));
        }}
      />
      {children}
    </StyledTodoItem>
  );
};

export default TodoItem;
