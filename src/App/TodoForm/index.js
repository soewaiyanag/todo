import { useDispatch } from "react-redux";
import StyledCheckbox from "App/Checkbox/styled";
import StyledTodoForm from "./styled";
import TodoInput from "App/TodoInput";
import { add } from "store/todoSlice";
import { useState, useCallback } from "react";
import clickSoundURL from "assets/click-sound.mp3";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const playSound = useCallback(() => {
    const completeSound = new Audio(clickSoundURL);
    completeSound.currentTime = 0; // to play sound continuously on click
    completeSound.play();
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter" && text !== "") {
      dispatch(add({ text }));
      setText("");
      playSound();
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <StyledTodoForm>
      <StyledCheckbox readOnly />
      <TodoInput
        value={text}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
        placeholder="Create a new todo..."
      />
    </StyledTodoForm>
  );
};

export default TodoForm;
