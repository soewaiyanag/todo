import styled from "styled-components";
import Box from "shared/Box";

const StyledTodoItems = styled(Box)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  margin-top: 1rem;
  overflow: hidden;
  padding: 0;
`;

export default StyledTodoItems;
