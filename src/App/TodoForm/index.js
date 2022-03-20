import { useDispatch } from "react-redux";
import Checkbox from "../../shared/Checkbox";
import StyledTodoForm from "./styled";
import TodoInput from "../TodoInput";
import { add } from "../../store/todoSlice";
import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <StyledTodoForm>
      <Checkbox readOnly disabled />
      <TodoInput
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(add({ text }));
          }
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Create a new todo..."
      />
    </StyledTodoForm>
  );
};

export default TodoForm;
