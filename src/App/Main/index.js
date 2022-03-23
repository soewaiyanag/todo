import StyledMain from "./styled";
import TodoForm from "../TodoForm";
import TodoItems from "../TodoItems";
import TodoContainer from "../TodoContainer/styled";

const Main = () => {
  return (
    <StyledMain>
      <TodoContainer>
        <TodoForm />
        <TodoItems />
      </TodoContainer>
    </StyledMain>
  );
};

export default Main;
