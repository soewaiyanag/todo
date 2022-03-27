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

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  /* overwrite to fix out of position when dragging (react-beautiful-dnd) */
  left: auto !important;
  top: auto !important;

  /* Styles while dragging */
  border-radius: ${({ isDragging, theme }) =>
    isDragging && theme.sizes.borderRadius};
`;

export default StyledTodoItem;
