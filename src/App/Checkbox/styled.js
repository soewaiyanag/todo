import styled, { css } from 'styled-components';
import checkIcon from 'assets/icon-check.svg';
import transition from 'shared/transition';

const checkedStyle = css`
  background: linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  ::after {
    content: url(${checkIcon});
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const uncheckedStyle = css`
  background: transparent;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${transition}
  height: 1.4rem;
  aspect-ratio: 1/1;
  position: relative;
  appearance: none;
  border-radius: 50%;
  justify-self: center;
  ${({ isCompleted }) => (isCompleted ? checkedStyle : uncheckedStyle)};
  cursor: pointer;
  border: ${({ theme, isCompleted }) =>
    !isCompleted && '2px solid ' + theme.colors.border};
`;

export const DummyCheckbox = styled(StyledCheckbox).attrs({
  as: 'div',
  type: '',
})`
  cursor: default;
  /* changing to div changed behaviour */
  /* to fix it, have to add 2 lines below */
  height: 1.2rem;
  margin-left: 0.2rem;
`;

export default StyledCheckbox;
