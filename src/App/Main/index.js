import Container from "../../shared/Container";
import StyledMain from "./styled";
import TodoForm from "../TodoForm";
import TodoContainer from "../TodoContainer";
import Wrapper from "./Wrapper";

const Main = () => {
  return (
    <StyledMain>
      <Wrapper>
        <Container>
          <TodoForm />
          <TodoContainer />
        </Container>
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
