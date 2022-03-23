import styled from "styled-components";
import { ReactComponent as CrossIcon } from "assets/icon-cross.svg";

const StyledDeleteIcon = styled(CrossIcon)`
  transform: scale(0.8); /* to small the size */
  cursor: pointer;

  & path {
    fill: #494c6b;
  }

  &:hover path {
    fill: #9397c9;
  }
`;

export default StyledDeleteIcon;
