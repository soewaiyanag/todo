import styled from 'styled-components';
import fontFamily from 'shared/font-family';

const StyledTodoFooterBtn = styled.button`
  ${fontFamily};
  color: ${({ theme }) => theme.colors.secText};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  /* reset default styles */
  background-color: transparent;
  outline: none;
  border: none;
`;

export default StyledTodoFooterBtn;
