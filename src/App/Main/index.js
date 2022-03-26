import StyledMain from "./styled";
import TodoForm from "App/TodoForm";
import TodoItems from "App/TodoItems";
import { DragDropContext } from "react-beautiful-dnd";
import TodoContainer from "App/TodoContainer/styled";
import { reorder } from "store/todoSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    dispatch(reorder(result));
  };

  return (
    <StyledMain>
      <TodoContainer>
        <TodoForm />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <TodoItems />
        </DragDropContext>
      </TodoContainer>
    </StyledMain>
  );
};

export default Main;
