import styled from 'styled-components';
import Box from 'shared/Box';

const StyledTodoItems = styled(Box)`
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin-top: 1rem;
  overflow: hidden;
  padding: 0;
`;

export default StyledTodoItems;
