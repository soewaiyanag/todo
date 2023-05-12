import styled from 'styled-components';
import Box from 'shared/Box';

const StyledTodoForm = styled(Box)`
  position: relative;
  z-index: 10;
  display: flex;
  gap: ${({ theme }) => theme.sizes.gap};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

export default StyledTodoForm;
