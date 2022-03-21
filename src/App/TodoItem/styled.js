import styled from "styled-components";
import Box from "../../shared/Box";

const StyledTodoItem = styled(Box)`
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.colors.secText : theme.colors.primaryText};
  text-decoration: ${({ isCompleted }) => isCompleted && "line-through"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  gap: 1rem;
  align-items: center;
  :last-child {
    border: none;
  }
`;

export default StyledTodoItem;
