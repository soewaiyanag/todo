import styled from "styled-components";

const TodoInput = styled.input.attrs({ type: "text" })`
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

export default TodoInput;
