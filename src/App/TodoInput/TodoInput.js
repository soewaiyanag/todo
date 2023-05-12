import styled from 'styled-components';
import fontFamily from 'shared/font-family';

const TodoInput = styled.input.attrs({ type: 'text' })`
  ${fontFamily}
  color: ${({ theme }) => theme.colors.primaryText};
  &::placeholder {
    color: ${({ theme }) => theme.colors.secText};
  }
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

export default TodoInput;
