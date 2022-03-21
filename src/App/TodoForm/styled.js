import styled from "styled-components";
import Box from "../../shared/Box";

const StyledTodoForm = styled(Box)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  display: flex;
  gap: ${({ theme }) => theme.sizes.gap};
`;

export default StyledTodoForm;
