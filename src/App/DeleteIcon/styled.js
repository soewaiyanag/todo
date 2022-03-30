import styled from 'styled-components';
import { ReactComponent as CrossIcon } from 'assets/icon-cross.svg';
import transition from 'shared/transition';

const StyledDeleteIcon = styled(CrossIcon)`
  ${transition}
  transform: scale(0.8); /* to small the size */
  cursor: pointer;
  opacity: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    opacity: 1;
  }

  & path {
    fill: #494c6b;
  }

  &:hover path {
    fill: #9397c9;
  }
`;

export default StyledDeleteIcon;
