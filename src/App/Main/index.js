import Container from "../../shared/Container";
import StyledMain from "./styled";
import TodoForm from "../TodoForm";
import TodoContainer from "../TodoContainer";
import Wrapper from "./Wrapper";

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <TodoForm />
        <TodoContainer />
      </Container>
    </StyledMain>
  );
};

export default Main;
