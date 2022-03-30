import StyledMain, { FooterText } from './styled';
import TodoForm from 'App/TodoForm';
import TodoItems from 'App/TodoItems';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoContainer from 'App/TodoContainer/styled';
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
        <FooterText>Drag and drop to reorder list</FooterText>
      </TodoContainer>
    </StyledMain>
  );
};

export default Main;
