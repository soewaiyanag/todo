import { useDispatch } from "react-redux";
import Checkbox from "shared/Checkbox";
import StyledTodoForm from "./styled";
import TodoInput from "App/TodoInput";
import { add } from "store/todoSlice";
import { useState } from "react";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter" && text !== "") {
      dispatch(add({ text }));
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <StyledTodoForm>
      <Checkbox readOnly />
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
