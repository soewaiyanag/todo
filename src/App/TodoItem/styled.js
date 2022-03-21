import styled from "styled-components";
import Box from "../../shared/Box";

const StyledTodoItem = styled(Box)`
  color: ${({ theme }) => theme.colors.primaryText};
  display: flex;
  gap: 1rem;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  :last-child {
    border: none;
  }
`;

export default StyledTodoItem;
