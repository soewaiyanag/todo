import styled from 'styled-components';
import fontFamily from 'shared/font-family';
import transition from 'shared/transition';

const activeColor = '#4570c2';

const StyledTodoFooterBtn = styled.button`
  ${transition}
  ${fontFamily};
  color: ${({ theme, isActive }) =>
    isActive ? activeColor : theme.colors.secText};
  cursor: ${({ isClickable }) => isClickable && 'pointer'};
  font-size: 0.785rem;
  font-weight: 700;
  /* reset default styles */
  background-color: transparent;
  outline: none;
  border: none;

  :hover {
    color: ${({ isClickable, theme }) =>
      isClickable && theme.colors.primaryText};
  }
`;

export default StyledTodoFooterBtn;
