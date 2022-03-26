import StyledMain from "./styled";
import TodoForm from "App/TodoForm";
import TodoItems from "App/TodoItems";
import { DragDropContext } from "react-beautiful-dnd";
import TodoContainer from "App/TodoContainer/styled";

const Main = () => {
  const handleOnDragEnd = (result) => {};

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
