import styled from "styled-components";
import Box from "../../shared/Box";

const StyledTodoForm = styled(Box)`
  display: flex;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

export default StyledTodoForm;