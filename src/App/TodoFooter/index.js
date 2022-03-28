import Filter from 'App/Filter';
import StyledTodoFooter from './styled';
import TodoFooterBtn from 'App/TodoFooterBtn/styled';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted } from 'store/todoSlice.js';

const LeftItems = () => {
  const todos = useSelector((state) => state.todos.todos);
  const incompletedTodos = todos.filter((todo) => !todo.isCompleted);
  return <TodoFooterBtn>{incompletedTodos.length} items left</TodoFooterBtn>;
};

const ClearCompletedBtn = () => {
  const dispatch = useDispatch();
  return (
    <TodoFooterBtn onClick={() => dispatch(clearCompleted())} isClickable>
      Clear Completed
    </TodoFooterBtn>
  );
};

const TodoFooter = () => {
  return (
    <StyledTodoFooter>
      <LeftItems />
      <Filter />
      <ClearCompletedBtn />
    </StyledTodoFooter>
  );
};

export default TodoFooter;
