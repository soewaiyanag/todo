import StyledMain from './StyledMain';
import StyledFooter from 'App/layout/Footer/StyledFooter';
import TodoForm from 'App/TodoForm/TodoForm';
import TodoItems from 'App/TodoItems/TodoItems';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoContainer from 'App/TodoContainer/StyledTodoContainer';
import { reorder } from 'store/todoSlice';
import { useDispatch } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
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
        <StyledFooter>Drag and drop to reorder list</StyledFooter>
      </TodoContainer>
    </StyledMain>
  );
};

export default Main;
