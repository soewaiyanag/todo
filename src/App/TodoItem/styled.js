import styled from 'styled-components';
import Box from 'shared/Box';

export const TodoContent = styled.span`
  font-size: 1rem;
`;

const StyledTodoItem = styled(Box)`
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.colors.secText : theme.colors.primaryText};
  text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  gap: ${({ theme }) => theme.sizes.gap};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  position: relative;
  z-index: 10;

  /* Styles while dragging */
  border-radius: ${({ isDragging, theme }) =>
    isDragging && theme.sizes.borderRadius};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    &:hover > svg {
      opacity: 1;
    }
  }
`;

export default StyledTodoItem;
